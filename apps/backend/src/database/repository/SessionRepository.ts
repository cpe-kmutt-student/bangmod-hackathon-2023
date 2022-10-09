import { OAuthUser } from '@/utils/Types';
import { Auth, PrismaClient } from '@prisma/client';

export class SessionRepository {

  private readonly database: PrismaClient;

  public constructor(database: PrismaClient) {
    this.database = database;
  }

  public async createSession(sessionId: string, user: OAuthUser, expiryDate: Date) {
    await this.database.auth.create({
      data: {
        sessionId: sessionId,
        email: user.email,
        name: user.name,
        picture: user.picture,
        expiryDate: expiryDate,
      },
    });
  }

  public async getSessionById(sessionId: string): Promise<Auth | null> {
    return this.database.auth.findFirst({
      where: { sessionId: sessionId },
    });
  }

  public async getSessionByEmail(email: string): Promise<Auth | null> {
    return this.database.auth.findFirst({
      where: { email: email },
    });
  }

  public async updateSession(email: string, data: Partial<Auth>) {
    await this.database.auth.update({
      where: { email: email },
      data: data,
    });
  }

}
