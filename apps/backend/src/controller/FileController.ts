import { FileService } from '@/service/FileService';
import { RequireAuth } from '@/utils/decorator/AuthDecorator';
import { AccpetedFileType, AllowFile } from '@/utils/decorator/FileDecorator';
import { FileGetApiSchema, FilePostApiSchema } from 'api-schema';
import http from 'http';
import { BadRequestException, Controller, ControllerMapping, Methods, NotFoundException, Request, Response, RouteMapping, UnauthorizedException } from 'springpress';

@ControllerMapping('/file')
export class FileController extends Controller {

  private readonly fileService: FileService;

  public constructor(fileService: FileService) {
    super();
    this.fileService = fileService;
  }

  @RequireAuth()
  @AllowFile(AccpetedFileType.DOCUMENT, false)
  @RouteMapping('/document', Methods.POST)
  private async uploadRegistrationDocument(req: Request<FilePostApiSchema>, res: Response) {
    const stackError = (req as any).error;
    if (stackError) throw new Error('Parsing file error');
    
    if (!req.file) throw new BadRequestException('No provided file');
    if (!req.query.type) throw new BadRequestException('Query `type` is invalid');
    if (!req.query.i) throw new BadRequestException('Query `i` is invalid');

    const session = req.session!;
    const fileType = Number.parseInt(req.query.type);

    const hashedEmail = this.fileService.getHashedEmail(session.email);
    const index = Number.parseInt(req.query.i);
    const file = await this.fileService.rememberFile(session, index, req.file, fileType);

    if (!file) throw new BadRequestException('Cannot upload this file');

    const displayFileKey = file.fileKey.replace(',', '');
    res.status(200).json({ url: `/file/storage/${hashedEmail}/${displayFileKey}/${req.file.originalname}` });
  }

  @RequireAuth()
  @RouteMapping('/document', Methods.GET)
  private async getDocuments(req: Request, res: Response) {
    const documents = await this.fileService.getDocuments(req.session!.email);
    if (!documents) throw new NotFoundException('Cannot file any uploaded file');

    const hashedEmail = this.fileService.getHashedEmail(req.session!.email);
    const filteredDocuments = documents
      .map((document) => ({
        index: document.index,
        originalName: document.originalName,
        fileType: document.fileType,
        url: `/file/storage/${hashedEmail}/${document.fileKey.replace(',', '')}/${document.originalName}`,
      }))

    res.status(200).json(filteredDocuments)
  }

  @RequireAuth()
  @RouteMapping('/storage/:hashedEmail/:fileKey/:originalName', Methods.GET)
  private async getFile(req: Request<FileGetApiSchema>, res: Response) {
    const hashedEmail = req.params.hashedEmail;
    const fileKey = req.params.fileKey;
    const originalName = req.params.originalName;
  
    if (!this.fileService.isFileOwner(req.session!, hashedEmail)) {
      throw new UnauthorizedException('No permission to access this file');
    }

    const fileUrl = await this.fileService.getFile(fileKey, originalName);
    if (!fileUrl) throw new NotFoundException('Resource not found');
  
    // Proxy to SeaweedFS
    http
      .request(fileUrl)
      .on('response', (response) => {
        response.headers.server = 'Vectier Cloud Storage';
        res.writeHead(response.statusCode!, response.headers);
        response.pipe(res);
      })
      .end();
  }

}
