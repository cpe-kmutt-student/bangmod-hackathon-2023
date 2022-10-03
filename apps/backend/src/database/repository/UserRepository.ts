import { PrismaClient } from '@prisma/client';

export class UserRepository {

  private readonly database: PrismaClient;

  public constructor(database: PrismaClient) {
    this.database = database;
  }

  public async getFullName(id: string): Promise<void> {

  }
  
};
