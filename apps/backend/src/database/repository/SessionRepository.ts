import { PrismaClient } from '@prisma/client';

export class SessionRepository {

  private readonly database: PrismaClient;

  public constructor(database: PrismaClient) {
    this.database = database;
  }

}
