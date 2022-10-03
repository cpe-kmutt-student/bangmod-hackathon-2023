import { AuthService } from '@/service/AuthService';
import { CookieProvider } from '@/utils/cookies/CookieProvider';
import { RequireAuth } from '@/utils/decorator/AuthDecorator';
import { BadRequestException, Controller, ControllerMapping, Methods, Request, Response, RouteMapping } from 'springpress';

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
  private async requestToOAuth(req: Request, res: Response) {
    const authUrl = this.authSerive.getOAuthUrl();
    res.redirect(authUrl);
  }

  @RouteMapping('/callback', Methods.GET)
  private async oAuthCallback(req: Request, res: Response) {
    const { code } = req.query;
    if (!code) throw new BadRequestException();

    try {
      const userId = await this.authSerive.getUserIdFromOAuth(code.toString());

      const cookie = this.authSerive.getSessionCookie(userId);
      this.cookieProvider.setSignedCookie(res, cookie);

      res.status(200).json({ message: 'user authenticated' });
    } catch {
      throw new BadRequestException();
    }
  }

  @RequireAuth()
  @RouteMapping('/me', Methods.GET)
  private async me(req: Request, res: Response) {
    res.status(200).json({
      user: 'test'
    });
  }

}
