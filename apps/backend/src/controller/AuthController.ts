import { AuthService } from '@/service/AuthService';
import { RequireAuth } from '@/utils/decorator/AuthDecorator';
import { AuthGetAuthApiSchema, AuthGetCallbackApiSchema, AuthGetMeApiSchema } from 'api-schema';
import { BadRequestException, Controller, ControllerMapping, Methods, Request, Response, RouteMapping } from 'springpress';

@ControllerMapping('/auth')
export class AuthController extends Controller {

  private readonly authService: AuthService;

  public constructor(authService: AuthService) {
    super();
    this.authService = authService;
  }

  @RouteMapping('/', Methods.GET)
  private async requestToOAuth(req: Request, res: Response<AuthGetAuthApiSchema>) {
    const authUrl = this.authService.getOAuthUrl();
    res.status(200).json({ url: authUrl });
  }

  @RouteMapping('/callback', Methods.GET)
  private async oAuthCallback(req: Request<AuthGetCallbackApiSchema>, res: Response) {
    const { code } = req.query;
    if (!code) throw new BadRequestException();

    try {
      const user = await this.authService.getOAuthUser(code.toString());
      await this.authService.setSession(res, user);
      res.redirect(process.env.FRONTEND_URL);
    } catch {
      throw new BadRequestException();
    }
  }

  @RequireAuth()
  @RouteMapping('/me', Methods.GET)
  private async me(req: Request, res: Response<AuthGetMeApiSchema>) {
    res.status(200).json({
      name: 'test'
    });
  }

}
