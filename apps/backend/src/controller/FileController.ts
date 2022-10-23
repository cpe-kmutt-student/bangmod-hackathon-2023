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

    const session = req.session!;
    const fileType = Number.parseInt(req.query.type);

    const hashedEmail = this.fileService.getHashedEmail(session.email);
    const fileId = await this.fileService.rememberFile(session, req.file, fileType);

    if (!fileId) throw new BadRequestException('Cannot upload this file');

    res.status(200).json({ url: `/file/storage/${hashedEmail}/${fileId}/${req.file.originalname}` });
  }

  @RequireAuth()
  @AllowFile(AccpetedFileType.SOURCECODE, false)
  @RouteMapping('/sourcecode', Methods.POST)
  private async uploadSourceCode(req: Request<FilePostApiSchema>, res: Response) {
    if (!req.file) throw new BadRequestException('No provided file');
    if (!req.query.type) throw new BadRequestException('Query `type` is invalid');

    const session = req.session!;
    const fileType = Number.parseInt(req.query.type);

    const hashedEmail = this.fileService.getHashedEmail(session.email);
    const fileId = await this.fileService.rememberFile(session, req.file, fileType);

    if (!fileId) throw new BadRequestException('Cannot upload this file');

    res.status(200).json({ url: `/file/storage/${hashedEmail}/${fileId}/${req.file.originalname}` });
  }

  @RequireAuth()
  @RouteMapping('/storage/:hashedEmail/:fileId/:originalName', Methods.GET)
  private async getFile(req: Request<FileGetApiSchema>, res: Response) {
    const hashedEmail = req.params.hashedEmail;
    const fileId = req.params.fileId;
    const originalName = req.params.originalName;
  
    if (!this.fileService.isFileOwner(req.session!, hashedEmail)) {
      throw new UnauthorizedException('No permission to access this file');
    }

    const fileUrl = await this.fileService.getFile(fileId, originalName);
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
