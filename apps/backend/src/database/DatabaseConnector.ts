import { PrismaClient } from '@prisma/client';

export class DatabaseConnector {
  
  private readonly prisma = new PrismaClient();

  public async connect(): Promise<void> {
    this.prisma.$connect();
  }

  public async disconnect(): Promise<void> {
    this.prisma.$disconnect();
  }

  public getClient(): PrismaClient {
    return this.prisma;
  }

}
