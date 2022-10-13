import { RequireAuth } from '@/utils/decorator/AuthDecorator';
import { AllowFile, FileType } from '@/utils/decorator/FileDecorator';
import { BadRequestException, Controller, ControllerMapping, Methods, Request, Response, RouteMapping } from 'springpress';

@ControllerMapping('/file')
export class FileController extends Controller {

  @RequireAuth()
  @AllowFile(FileType.DOCUMENT, false)
  @RouteMapping('/document', Methods.POST)
  private async uploadRegistrationDocument(req: Request, res: Response) {
    if (!req.file) throw new BadRequestException('No provided file');

    const fileName = req.file.filename;

    res.status(200).json({ url: `http://localhost:8080/${fileName}` });
  }

  @RequireAuth()
  @AllowFile(FileType.DOCUMENT, false)
  @RouteMapping('/sourcecode', Methods.POST)
  private async uploadSourceCode(req: Request, res: Response) {
    if (!req.file) throw new BadRequestException('No provided file');

    const fileName = req.file.filename;

    res.status(200).json({ url: `http://localhost:8080/${fileName}` });
  }

}
