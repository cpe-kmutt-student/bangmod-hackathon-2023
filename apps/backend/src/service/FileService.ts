import { FileRepository, FileType } from '@/database/repository/FileRepository';
import { SeaweedClient } from '@/utils/seaweedfs/SeaweedClient';
import { SeaweedStorageEngine } from '@/utils/seaweedfs/SeaweedStorageEngine';
import { OAuthUser } from '@/utils/Types';
import { File } from '@prisma/client';
import crypto from 'crypto';
import multer, { FileFilterCallback, Multer } from 'multer';
import { BadRequestException, Request } from 'springpress';

type UploadingFile = Express.Multer.File;

export class FileService {

  private readonly fileRepository: FileRepository;
  private readonly seaweedClient: SeaweedClient;
  private readonly documentUpload: Multer;

  private static readonly MAX_FILE_SIZE = 1_048_576 * 10;

  public constructor(fileRepository: FileRepository, seaweedClient: SeaweedClient) {
    this.fileRepository = fileRepository;
    this.seaweedClient = seaweedClient;
    const storageEngine = new SeaweedStorageEngine(this.seaweedClient);

    this.documentUpload = multer({
      storage: storageEngine,
      fileFilter: this.filterFile(this.filterDocumentFile),
      limits: {
        fileSize: FileService.MAX_FILE_SIZE,
      },
    });
  }

  private filterFile(filter: (file: UploadingFile) => boolean) {
    return (req: Request, file: UploadingFile, callback: FileFilterCallback) => {
      if (filter(file)) return callback(null, true);
      callback(new BadRequestException('This file extension not allowed'));
    };
  }

  private filterDocumentFile(file: UploadingFile): boolean {
    const allowedMimes = ['image/png', 'image/jpg', 'image/jpeg', 'application/pdf'];
    return allowedMimes.includes(file.mimetype);
  }

  public uploadSingleDocument(fileName: string) {
    return this.documentUpload.single(fileName);
  }

  public async rememberFile(
    user: OAuthUser,
    i: number,
    file: UploadingFile,
    fileType: FileType,
  ): Promise<File | null> {
    if (!Object.values(FileType).includes(fileType)) {
      return null;
    }

    const newFile = await this.fileRepository.remember(
      user,
      i,
      file.originalname,
      file.filename,
      fileType,
      new Date(),
    );

    return newFile || null;
  }

  public async getDocuments(email: string) {
    const documents = await this.fileRepository.getFilesByEmail(email);
    return documents;
  }

  public getHashedEmail(email: string): string {
    return crypto.createHash('sha256').update(email).digest('hex').slice(0, 22);
  }

  public isFileOwner(user: OAuthUser, hash: string): boolean {
    const hashedEmail = this.getHashedEmail(user.email);
    return hash === hashedEmail;
  }

  public async getFile(fileKey: string, originalName: string): Promise<string | null> {
    if (!fileKey.includes(',')) {
      fileKey = fileKey.charAt(0) + ',' + fileKey.slice(1, fileKey.length)
    }
    
    const file = await this.fileRepository.getFileByFileKey(fileKey);
    if (!file || (file.originalName !== originalName)) return null;
    return this.seaweedClient.read(file.fileKey);
  }

}
