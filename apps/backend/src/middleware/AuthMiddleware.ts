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
      const session = await this.authService.getSessionFromRequest(req);
      if (!session) throw new UnauthorizedException('Authentication is required');

      const isSessionExpired = await this.authService.destroyExpiredSession(res, session);
      if (isSessionExpired) throw new UnauthorizedException('Session is expired');
      
      // Assign session property in the incoming Request object,
      // for manipulating with the authenticated request that can identify a user 
      // to retrieve the user data in the subsequent request
      req.session = {
        email: session.email,
        name: session.name,
        picture: session.picture,
      };

      next();
    };
  }

  public getRegisterCondition(routeMetadata: RouteMetadata): boolean {
    return routeMetadata.authentication ?? false;
  }

}
