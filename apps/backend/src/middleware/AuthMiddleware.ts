import { AuthService } from '@/service/AuthService';
import { Middleware, NextFunction, Request, Response, RouteHandler, RouteMetadata, UnauthorizedException } from 'springpress';

export class AuthMiddleware extends Middleware {

  private readonly authService: AuthService;

  public constructor(authService: AuthService) {
    super();
    this.authService = authService;
  }

  public getHandler(routeMetadata: RouteMetadata): RouteHandler {
    return async (req: Request, res: Response, next: NextFunction) => {
      const session = this.authService.getSession(req);

      if (!session) {
        throw new UnauthorizedException('authentication is required');
      }

      // Assign session property in the incoming Request object,
      // for manipulating with the authenticated request that can identify a user 
      // to retrieve the user data in the subsequent request
      // req.session = {
      //   id: sessionId,
      // };

      next();
    };
  }

  public getRegisterCondition(routeMetadata: RouteMetadata): boolean {
    return routeMetadata.authentication ?? false;
  }

}
