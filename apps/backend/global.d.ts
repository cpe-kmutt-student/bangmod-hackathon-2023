declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';

      DB_URL: string;

      GOOGLE_OAUTH_REDIRECT_URL: string;
      GOOGLE_OAUTH_CLIENT_ID: string;
      GOOGLE_OAUTH_CLIENT_SECRET: string;

      FRONTEND_URL: string;
    }
  }

  declare namespace Express {
    export interface Request {
      nathee: boolean,
      session?: {
        id: string,
      }
    }
  }

  declare namespace Springpress {
    export interface RouteMetadata {
      authentication?: boolean;
    }
  }
}

export { };
