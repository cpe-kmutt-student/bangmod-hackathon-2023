import { File, PrismaClient } from '@prisma/client';

export class FileRepository {
  
  private readonly database: PrismaClient;

  public constructor(database: PrismaClient) {
    this.database = database;
  }

  public async remember(participantId: number, originalName: string, fileKey: string, fileType: string, uploadDate: Date) {
    const newFile = await this.database.file.create({
      data: {
        fileKey: fileKey,
        fileType: fileType,
        originalName: originalName,
        uploadDate: uploadDate,
        participantId: participantId
      }
    });

    this.createFileHistory(newFile);
  }

  public async updateFileById(id: number, data: Partial<File>) {
    const updateFile = await this.database.file.update({
      where: { id: id },
      data: data
    });

    this.createFileHistory(updateFile);
  }

  public async createFileHistory(file: File) {
    await this.database.fileHistory.create({
      data: {
        fileKey: file.fileKey,
        uploadDate: file.uploadDate,
        fileId: file.id
      }
    });
  }

  public async getFileById(id: number) {
    return this.database.file.findUnique({
      where: { id: id },
    });
  }

  public async getFileByParticipantId(id: number) {
    return this.database.file.findMany({
      where: { participantId: id }
    });
  }

  public async deleteFileById(id: number) {
    this.database.file.delete({
      where: {id: id}
    });
  }

}
