import { SessionRepository } from '@/database/repository/SessionRepository';
import { Cookie } from '@/utils/cookies/Cookie';
import { CookieProvider } from '@/utils/cookies/CookieProvider';
import { Auth } from '@prisma/client';
import crypto from 'crypto';
import { google } from 'googleapis';
import { OAuth2Client } from 'googleapis-common';
import { Request, Response } from 'springpress';

export class AuthService {

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

  public async setSession(res: Response, user: OAuthUser): Promise<void> {
    const maxAge = 1000 * 60 * 60 * 24 * 14;
    const expiryDate = new Date(Date.now() + maxAge);

    const sessionId = crypto.randomUUID();
    const cookie = new Cookie('sid', sessionId)
      .setMaxAge(maxAge)
      .setPath('/')
      .setHttpOnly(true);

    this.cookieProvider.setSignedCookie(res, cookie);
    await this.sessionRepository.createSession(sessionId, user, expiryDate);
  }

  public async getSession(req: Request): Promise<Auth | null> {
    const sessionId = this.cookieProvider.getSignedCookie(req, 'sid');
    if (!sessionId) throw new Error('Invalid session id');
    return this.sessionRepository.getSession(sessionId);
  }

}

export type OAuthUser = {
  email: string,
  name: string,
  picture: string,
};
