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
    i: number,
    originalName: string,
    fileKey: string,
    fileType: FileType,
    uploadDate: Date,
  ) {
    const email = user.email;
    const team = await this.database.team.findUnique({
      where: { email: email }
    });

    if (!team) return;

    if ((fileType === FileType.ADVISOR_DOCUMENT) && (i !== 0)) return;
    if ((fileType !== FileType.ADVISOR_DOCUMENT) && ![0, 1, 2].includes(i)) return;

    const participants = await this.database.participant.findMany({
      where: { teamId: team.id }
    });

    if (!participants) return;

    const participantId = participants[i].id + +(fileType !== FileType.ADVISOR_DOCUMENT);

    const newFile = await this.database.file.upsert({
      where: {
        participantId_fileType: {
          participantId: participantId,
          fileType: fileType,
        },
      },
      update: {
        fileKey: fileKey,
        uploadDate: uploadDate,
        originalName: originalName,
      },
      create: {
        fileKey: fileKey,
        fileType: fileType,
        index: i,
        originalName: originalName,
        uploadDate: uploadDate,
        participantId: participantId,
      }
    });

    await this.createFileHistory(participantId, newFile, fileType);
    return newFile;
  }

  public async createFileHistory(participantId: number, file: File, fileType: number) {
    await this.database.fileHistory.create({
      data: {
        participantId: participantId,
        fileType: fileType,
        fileKey: file.fileKey,
        uploadDate: file.uploadDate,
      }
    });
  }

  public async getFileByFileKey(fileKey: string) {
    return this.database.file.findFirst({
      where: { fileKey: fileKey },
    });
  }

  public async getFilesByEmail(email: string) {
    const team = await this.database.team.findUnique({
      where: { email: email },
    });

    if (!team) return;

    const participants = await this.database.participant.findMany({
      where: { teamId: team.id },
    });

    if (!participants) return;
    const participantIds = participants.map((participant) => ({ participantId: participant.id }));

    const files = await this.database.file.findMany({
      where: { OR: participantIds },
      orderBy: { participantId: 'asc' },
    });

    return files;
  }

  public async getFileByParticipantId(id: number) {
    return this.database.file.findMany({
      where: { participantId: id }
    });
  }

}
