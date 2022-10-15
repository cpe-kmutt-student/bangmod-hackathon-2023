import { PrismaClient } from '@prisma/client';

export class DatabaseConnector {
  
  private readonly prisma = new PrismaClient();

  public async connect(): Promise<void> {
    await this.prisma.$connect();
  }

  public async disconnect(): Promise<void> {
    await this.prisma.$disconnect();
  }

  public getClient(): PrismaClient {
    return this.prisma;
  }

}
