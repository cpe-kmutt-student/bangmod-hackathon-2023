import { SessionRepository } from '@/database/repository/SessionRepository';
import { Cookie } from '@/utils/cookies/Cookie';
import { CookieProvider } from '@/utils/cookies/CookieProvider';
import { OAuthUser } from '@/utils/Types';
import { Auth } from '@prisma/client';
import crypto from 'crypto';
import { google } from 'googleapis';
import { OAuth2Client } from 'googleapis-common';
import { Request, Response } from 'springpress';

export class AuthService {

  public static readonly SESSION_MAX_AGE = 1000 * 60 * 60 * 24 * 14;

  private readonly authClient: OAuth2Client;
  private readonly cookieProvider: CookieProvider;
  private readonly sessionRepository: SessionRepository;

  public constructor(
    clientId: string,
    clientSecret: string,
    redirectUrl: string,
    cookieProvider: CookieProvider,
    sessionRepository: SessionRepository,
  ) {
    this.authClient = new google.auth.OAuth2(clientId, clientSecret, redirectUrl);
    this.cookieProvider = cookieProvider;
    this.sessionRepository = sessionRepository;
  }

  public getOAuthUrl(): string  {
    return this.authClient.generateAuthUrl({
      access_type: 'offline',
      prompt: 'consent',
      scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email',
      ],
    });
  }

  private async getOAuthCredentials(code: string) {
    const { tokens } = await this.authClient.getToken(code);
    this.authClient.setCredentials(tokens);

    const auth = google.oauth2({
      auth: this.authClient,
      version: 'v2',
    });
    const userInfo = await auth.userinfo.get();
    return userInfo.data;
  }

  public async getOAuthUser(code: string): Promise<OAuthUser> {
    const user = await this.getOAuthCredentials(code);

    const email = user.email;
    if (!email) throw new Error('Can not retrieve e-mail from Google OAuth2');

    return {
      email: email,
      name: user.name || '',
      picture: user.picture || '', 
    };
  }

  public async setSessionFromOAuth(res: Response, user: OAuthUser): Promise<void> {
    const sessionId = crypto.randomUUID();
    const expiryDate = new Date(Date.now() + AuthService.SESSION_MAX_AGE);
    
    const session = await this.sessionRepository.getSessionByEmail(user.email);
    if (session) {
      await this.sessionRepository.updateSession(user.email, {
        sessionId: sessionId,
        name: user.name,
        picture: user.picture,
        expiryDate: expiryDate,
      });
    } else {
      await this.sessionRepository.createSession(sessionId, user, expiryDate);
    }

    const cookie = new Cookie('sid', sessionId)
      .setMaxAge(AuthService.SESSION_MAX_AGE)
      .setPath('/')
      .setHttpOnly(true);
    this.cookieProvider.setSignedCookie(res, cookie);
  }

  public async getSessionFromRequest(req: Request): Promise<Auth | null> {
    const sessionId = this.cookieProvider.getSignedCookie(req, 'sid');
    if (!sessionId) return null;
    return this.sessionRepository.getSessionById(sessionId);
  }

  public async destroyExpiredSession(res: Response, session: Auth): Promise<boolean> {
    if (new Date() < session.expiryDate) return false;

    /** 
     * If a session is expired, we will set the `sessionId` field in our database to an empty string.
     * To prevent {@link getSession} return an expired session.
     * 
     * This mechanism, it's to avoid the duplicated record in the database.
     * If the user re-login, the system will find the other unique key like `email`
     * to update the expired record to the new fresh session with the same data.
     * 
     * The advantage is when you look at the session record table if you find a record
     * with the `sessionId` field empty it means this session is expired and the `expiryDate`
     * will leave the expiry date information to you.
     */
    await this.sessionRepository.updateSession(session.email, { sessionId: '' });

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    const removingCookie = new Cookie('sid', 'your-cookie-will-be-destroyed')
      .setExpiryDate(yesterday);

    this.cookieProvider.setCookie(res, removingCookie);
    
    return true;
  }

}
