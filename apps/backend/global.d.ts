type OAuthUser = import('./src/utils/Types').OAuthUser;

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';

      DB_URL: string;

      SESSION_SECRET: string;
      
      GOOGLE_OAUTH_REDIRECT_URL: string;
      GOOGLE_OAUTH_CLIENT_ID: string;
      GOOGLE_OAUTH_CLIENT_SECRET: string;

      STORAGE_HOST: string;
      STORAGE_PORT: string;

      FRONTEND_URL: string;
    }
  }

  declare namespace Express {
    export interface Request {
      session?: OAuthUser,
    }
  }

  declare namespace Springpress {
    export interface RouteMetadata {
      authentication?: boolean;
      allowMultipartFormData?: {
        allowMultiple: boolean,
        isDocument?: boolean,
      };
    }
  }
}

export { };
