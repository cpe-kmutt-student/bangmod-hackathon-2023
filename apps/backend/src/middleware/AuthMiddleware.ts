import { CookieProvider } from '@/utils/cookies/CookieProvider';
import { Middleware, NextFunction, Request, Response, RouteHandler, RouteMetadata, UnauthorizedException } from 'springpress';

export class AuthMiddleware extends Middleware {

  private readonly cookieProvider: CookieProvider;

  public constructor(cookieProdiver: CookieProvider) {
    super();
    this.cookieProvider = cookieProdiver;
  }

  public getHandler(routeMetadata: RouteMetadata): RouteHandler {
    return async (req: Request, res: Response, next: NextFunction) => {
      const sessionId = this.cookieProvider.getSignedCookie(req, 'sid');

      if (!sessionId) {
        throw new UnauthorizedException('authentication is required');
      }

      // Assign session property in the incoming Request object,
      // for manipulating with the authenticated request that can identify a user 
      // to retrieve the user data in the subsequent request
      req.session = {
        id: sessionId,
      };

      next();
    };
  }

  public getRegisterCondition(routeMetadata: RouteMetadata): boolean {
    return (routeMetadata as any).authentication;
  }

}
