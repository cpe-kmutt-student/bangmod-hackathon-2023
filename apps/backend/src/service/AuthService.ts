import { SessionRepository } from '@/database/repository/SessionRepository';
import { Cookie } from '@/utils/cookies/Cookie';
import crypto from 'crypto';
import { google } from 'googleapis';
import { OAuth2Client } from 'googleapis-common';

export class AuthService {

  private readonly authClient: OAuth2Client;
  private readonly sessionRepository: SessionRepository;

  public constructor(
    clientId: string,
    clientSecret: string,
    redirectUrl: string,
    sessionRepository: SessionRepository
  ) {
    this.authClient = new google.auth.OAuth2(clientId, clientSecret, redirectUrl);
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

  public async getUserIdFromOAuth(code: string) {
    const user = await this.getOAuthCredentials(code);

    const email = user.email;
    if (!email) throw new Error('Can not retrieve e-mail from Google OAuth2');

    return email;
  }

  public getSessionCookie(userId: string): Cookie {
    const sessionId = crypto.randomUUID();
    const cookie = new Cookie('sid', sessionId)
      .setMaxAge(1000 * 60 * 60 * 24 * 14)
      .setPath('/')
      .setHttpOnly(true);
    return cookie;
  }

}
