import { FileService } from '@/service/FileService';
import { BadRequestException, Middleware, NextFunction, Request, Response, RouteMetadata } from 'springpress';

export class FileMiddleware extends Middleware {

  private readonly fileService: FileService;

  public constructor(fileService: FileService) {
    super();
    this.fileService = fileService;
  }

  public getHandler(routeMetadata: RouteMetadata): any {
    return async (req: Request, res: Response, next: NextFunction) => {
      const metadata = routeMetadata.allowMultipartFormData!;
      if (metadata.isDocument) {
        this.fileService.uploadSingleDocument('file')(req as any, res, next);
      } else if (metadata.isSourceCode) {
        this.fileService.uploadSingleSourcecode('file')(req as any, res, next);
      } else {
        throw new BadRequestException('Unknow file type');
      }
    };
  }

  public getRegisterCondition(routeMetadata: RouteMetadata): boolean {
    const hasSpecificMetadata =
      typeof routeMetadata.allowMultipartFormData === 'object'
      && routeMetadata.allowMultipartFormData !== null;
    return hasSpecificMetadata;
  }

}
