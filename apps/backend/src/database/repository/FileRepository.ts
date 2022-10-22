import { OAuthUser } from '@/utils/Types';
import { File, PrismaClient } from '@prisma/client';

export enum FileType {
  ADVISOR_DOCUMENT = 0,
  STUDENT_IMAGE,
  STUDENT_ID,
  STUDENT_PORPHOR_JED, // I don't know how to pronoun this XD
}

export class FileRepository {
  
  private readonly database: PrismaClient;

  public constructor(database: PrismaClient) {
    this.database = database;
  }

  public async remember(
    user: OAuthUser,
    originalName: string,
    fileKey: string,
    fileType: FileType,
    uploadDate: Date,
  ) {
    const email = user.email;
    const team = await this.database.team.findUnique({
      where: { email: email }
    });

    if(!team) return;

    const participant = await this.database.participant.findFirst({
      where: { teamId: team.id }
    });

    if (!participant) return;

    const newFile = await this.database.file.create({
      data: {
        fileKey: fileKey,
        fileType: fileType,
        originalName: originalName,
        uploadDate: uploadDate,
        participantId: participant.id,
      }
    });

    await this.createFileHistory(newFile);
    return newFile.id;
  }

  public async updateFileById(id: number, data: Partial<File>) {
    const updateFile = await this.database.file.update({
      where: { id: id },
      data: data
    });
    await this.createFileHistory(updateFile);
  }

  public async createFileHistory(file: File) {
    await this.database.fileHistory.create({
      data: {
        fileKey: file.fileKey,
        uploadDate: file.uploadDate,
        fileId: file.id,
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
      where: { id: id }
    });
  }

}
