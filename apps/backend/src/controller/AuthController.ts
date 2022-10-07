import { AuthService } from '@/service/AuthService';
import { CookieProvider } from '@/utils/cookies/CookieProvider';
import { RequireAuth } from '@/utils/decorator/AuthDecorator';
import { AuthGetMeResponse, AuthGetOAuthCallbackResponse, AuthGetOAuthUrlResponse, TypedResponse } from 'api-schema';
import { BadRequestException, Controller, ControllerMapping, Methods, Request, RouteMapping } from 'springpress';

@ControllerMapping('/auth')
export class AuthController extends Controller {

  private readonly cookieProvider: CookieProvider;
  private readonly authSerive: AuthService;

  public constructor(cookieProvider: CookieProvider, authService: AuthService) {
    super();
    this.cookieProvider = cookieProvider;
    this.authSerive = authService;
  }

  @RouteMapping('/', Methods.GET)
  private async requestToOAuth(req: Request, res: TypedResponse<AuthGetOAuthUrlResponse>) {
    const authUrl = this.authSerive.getOAuthUrl();
    res.status(200).json({ url: authUrl });
  }

  @RouteMapping('/callback', Methods.GET)
  private async oAuthCallback(req: Request, res: TypedResponse<AuthGetOAuthCallbackResponse>) {
    const { code } = req.query;
    if (!code) throw new BadRequestException();

    try {
      const userId = await this.authSerive.getUserIdFromOAuth(code.toString());

      const cookie = this.authSerive.getSessionCookie(userId);
      this.cookieProvider.setSignedCookie(res, cookie);

      res.redirect(process.env.FRONTEND_URL);
    } catch {
      throw new BadRequestException();
    }
  }

  @RequireAuth()
  @RouteMapping('/me', Methods.GET)
  private async me(req: Request, res: TypedResponse<AuthGetMeResponse>) {
    res.status(200).json({
      name: 'test'
    });
  }

}
