import { AuthController } from '@/controller/AuthController';
import { FileController } from '@/controller/FileController';
import { IndexController } from '@/controller/IndexController';
import { DatabaseConnector } from '@/database/DatabaseConnector';
import { FileRepository } from '@/database/repository/FileRepository';
import { SessionRepository } from '@/database/repository/SessionRepository';
import { AuthMiddleware } from '@/middleware/AuthMiddleware';
import { CompressionMiddleware } from '@/middleware/CompressionMiddleware';
import { DevCorsMiddleware } from '@/middleware/DevCorsMiddleware';
import { FileMiddleware } from '@/middleware/FileMiddleware';
import { AuthService } from '@/service/AuthService';
import { FileService } from '@/service/FileService';
import { CookieProvider } from '@/utils/cookies/CookieProvider';
import { SeaweedClient } from '@/utils/seaweedfs/SeaweedClient';
import { Controller, Middleware, Springpress } from 'springpress';

export class Server extends Springpress {

  private readonly cookieProvider     = new CookieProvider('this_is_a_secret');

  private readonly databaseConnector  = new DatabaseConnector();
  private readonly databaseClient     = this.databaseConnector.getClient();
  private readonly sessionRepository  = new SessionRepository(this.databaseClient);

  private readonly authService        = new AuthService(
    process.env.GOOGLE_OAUTH_CLIENT_ID,
    process.env.GOOGLE_OAUTH_CLIENT_SECRET,
    process.env.GOOGLE_OAUTH_REDIRECT_URL,
    this.cookieProvider,
    this.sessionRepository,
  );
  private readonly authMiddleware = new AuthMiddleware(this.authService);

  private readonly seaweedClient  = new SeaweedClient('localhost', 9333);
  private readonly fileRepository = new FileRepository(this.databaseClient);
  private readonly fileService    = new FileService(this.fileRepository, this.seaweedClient);
  private readonly fileMiddleware = new FileMiddleware(this.fileService);

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

    const registerWithAuthMiddleware = (controller: Controller, ...middleware: Middleware[]) => {
      registry.register(controller, [this.authMiddleware, ...middleware]);
    };

    if (process.env.NODE_ENV !== 'production') {
      console.log('(!) Registering Development CORS middleware');
      registry.registerGlobalMiddleware(new DevCorsMiddleware());
    }

    registry.registerGlobalMiddleware(new CompressionMiddleware());
    register(new IndexController());
    registerWithAuthMiddleware(new AuthController(this.authService));
    registerWithAuthMiddleware(new FileController(this.fileService), this.fileMiddleware);
  }
  
}
