import { AuthController } from '@/controller/AuthController';
import { IndexController } from '@/controller/IndexController';
import { DatabaseConnector } from '@/database/DatabaseConnector';
import { SessionRepository } from '@/database/repository/SessionRepository';
import { AuthMiddleware } from '@/middleware/AuthMiddleware';
import { AuthService } from '@/service/AuthService';
import { CookieProvider } from '@/utils/cookies/CookieProvider';
import { Controller, Springpress } from 'springpress';

export class Server extends Springpress {

  private readonly cookieProvider = new CookieProvider('this_is_a_secret');

  private readonly databaseConnector = new DatabaseConnector();
  private readonly databaseClient = this.databaseConnector.getClient();
  private readonly sessionRepository = new SessionRepository(this.databaseClient);

  private readonly authService = new AuthService(
    process.env.GOOGLE_OAUTH_CLIENT_ID,
    process.env.GOOGLE_OAUTH_CLIENT_SECRET,
    process.env.GOOGLE_OAUTH_REDIRECT_URL,
    this.cookieProvider,
    this.sessionRepository,
  );

  private readonly authMiddleware = new AuthMiddleware(this.authService);

  public async onStartup(): Promise<void> {
    console.log(`Connecting to the database...`);
    await this.databaseConnector.connect();

    console.log(`Registering all controllers...`);
    this.registerControllers();

    console.log(`Listening on port ${this.getPort()}`);
  }

  private registerControllers(): void {
    const registry = this.getControllerRegistry();

    const register = (controller: Controller) => {
      registry.register(controller);
    };

    const registerWithAuthMiddleware = (controller: Controller) => {
      registry.register(controller, [this.authMiddleware]);
    };

    register(new IndexController());
    registerWithAuthMiddleware(new AuthController(this.authService));
  }
  
}
