import { Middleware, NextFunction, Request, Response, RouteHandler, RouteMetadata } from 'springpress';

export class DevCorsMiddleware extends Middleware {

  private static readonly DEV_ORIGINS: string[] = [
    'http://localhost:3001',
    'http://localhost:3002',
  ];

  public getHandler(routeMetadata: RouteMetadata): RouteHandler {
    return async (req: Request, res: Response, next: NextFunction) => {
      if (req.headers.origin && DevCorsMiddleware.DEV_ORIGINS.includes(req.headers.origin)) {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
      }
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      res.header('Access-Control-Allow-Credentials', 'true');
      next();
    };
  }

}
