import compression from 'compression';
import { Middleware, RouteHandler, RouteMetadata } from 'springpress';

export class CompressionMiddleware extends Middleware {
  
  public getHandler(routeMetadata: RouteMetadata): RouteHandler {
    return compression() as RouteHandler;
  }
  
}
