import { RequireAuth } from '@/utils/decorator/AuthDecorator';
import { AllowFile, FileType } from '@/utils/decorator/FileDecorator';
import { BadRequestException, Controller, ControllerMapping, Methods, Request, Response, RouteMapping } from 'springpress';

@ControllerMapping('/file')
export class FileController extends Controller {

  @AllowFile(FileType.DOCUMENT, false)
  @RequireAuth()
  @RouteMapping('/document', Methods.POST)
  private async uploadRegistrationDocument(req: Request, res: Response) {
    if (!req.file) throw new BadRequestException('No provided file');
    res.status(200).json({ message: 'File upload successfully' });
  }

}
