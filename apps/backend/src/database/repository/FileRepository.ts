import { OAuthUser } from '@/utils/Types';
import { PrismaClient } from '@prisma/client';

export class FileRepository {
  
  private readonly database: PrismaClient;

  public constructor(database: PrismaClient) {
    this.database = database;
  }

  public async remember(
    user: OAuthUser, originalName: string, fileKey: string, uploadDate: Date
  ) {
    await this.database.file.create({
      data: {
        ownerId: user.email,
        originalName: originalName,
        fileKey: fileKey,
        uploadDate: uploadDate,
      },
    });
  }

  public async getFileById(id: number) {
    return this.database.file.findUnique({
      where: { id: id },
    });
  }

  public async getFilesByOwner(user: OAuthUser) {
    return this.database.file.findMany({
      where: { ownerId: user.email },
    });
  }

}
