import { AuthService } from '@/service/AuthService';
import { InputService } from '@/service/InputService';
import { RequireAuth } from '@/utils/decorator/AuthDecorator';
import { AuthGetAuthApiSchema, AuthGetCallbackApiSchema, AuthGetMeApiSchema } from '@bmh2023/api-schema';
import { BadRequestException, Controller, ControllerMapping, Methods, Request, Response, RouteMapping } from 'springpress';

@ControllerMapping('/auth')
export class AuthController extends Controller {

  private readonly authService: AuthService;
  private readonly inputService: InputService;

  public constructor(authService: AuthService, inputService: InputService) {
    super();
    this.authService = authService;
    this.inputService = inputService;
  }

  @RouteMapping('/', Methods.GET)
  private async requestToOAuth(req: Request, res: Response<AuthGetAuthApiSchema>) {
    const authUrl = this.authService.getOAuthUrl();
    res.status(200).json({ url: authUrl });
  }

  @RouteMapping('/callback', Methods.GET)
  private async oAuthCallback(req: Request<AuthGetCallbackApiSchema>, res: Response) {
    const { code } = req.query;
    if (!code) throw new BadRequestException('Invalid authentication code');

    try {
      const user = await this.authService.getOAuthUser(code.toString());
      await this.authService.setSessionFromOAuth(res, user);
      const teamId = await this.inputService.createTeamIfNotPresent(user.email);
      await this.inputService.createParticipantsIfNotPresent(teamId);
      res.redirect(process.env.FRONTEND_URL);
    } catch (error: Error | unknown) {
      const message = (error instanceof Error) ? error.message : 'Invalid user authentication';
      throw new BadRequestException(message);
    }
  }

  @RequireAuth()
  @RouteMapping('/me', Methods.GET)
  private async me(req: Request, res: Response<AuthGetMeApiSchema>) {
    res.status(200).json(req.session);
  }

  @RequireAuth()
  @RouteMapping('/logout', Methods.GET)
  private async logout(req: Request, res: Response) {
    const session = await this.authService.getSessionFromRequest(req);
    if (session) await this.authService.destroySession(res, session);
    res.status(200).json({ message: 'logout successfully' });
  }

}
