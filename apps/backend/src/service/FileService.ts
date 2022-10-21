import { FileRepository, FileType } from '@/database/repository/FileRepository';
import { SeaweedClient } from '@/utils/seaweedfs/SeaweedClient';
import { SeaweedStorageEngine } from '@/utils/seaweedfs/SeaweedStorageEngine';
import { OAuthUser } from '@/utils/Types';
import crypto from 'crypto';
import multer, { FileFilterCallback, Multer } from 'multer';
import path from 'path';
import { BadRequestException, Request } from 'springpress';

type File = Express.Multer.File;

export class FileService {

  private readonly fileRepository: FileRepository;
  private readonly seaweedClient: SeaweedClient;
  private readonly documentUpload: Multer;
  private readonly sourceCodeUpload: Multer;

  public constructor(fileRepository: FileRepository, seaweedClient: SeaweedClient) {
    this.fileRepository = fileRepository;
    this.seaweedClient = seaweedClient;
    const storageEngine = new SeaweedStorageEngine(this.seaweedClient);

    this.documentUpload = multer({
      storage: storageEngine,
      fileFilter: this.filterFile(this.filterDocumentFile),
    });
    this.sourceCodeUpload = multer({
      storage: storageEngine,
      fileFilter: this.filterFile(this.filterSourceCodeFile),
    });
  }

  private filterFile(filter: (file: File) => boolean) {
    return (req: Request, file: File, callback: FileFilterCallback) => {
      if (filter(file)) return callback(null, true);
      callback(new BadRequestException('This file extension not allowed'));
    };
  }

  private filterDocumentFile(file: File): boolean {
    const allowedMimes = ['image/png', 'image/jpg', 'image/jpeg', 'application/pdf'];
    return allowedMimes.includes(file.mimetype);
  }

  private filterSourceCodeFile(file: File): boolean {
    const allowedExtension = ['.c', '.cc', '.cpp', '.java'];
    return allowedExtension.includes(path.extname(file.originalname));
  }

  public uploadSingleDocument(fileName: string) {
    return this.documentUpload.single(fileName);
  }

  public uploadSingleSourcecode(fileName: string) {
    return this.sourceCodeUpload.single(fileName);
  }

  public async rememberFile(user: OAuthUser, file: File, fileType: FileType): Promise<boolean> {
    if (!Object.values(FileType).includes(fileType)) {
      return false;
    }

    await this.fileRepository.remember(
      user,
      file.originalname,
      file.filename,
      fileType,
      new Date(),
    );

    return true;
  }

  public isFileOwner(user: OAuthUser, hash: string): boolean {
    const hashedEmail = crypto.createHash('sha256').update(user.email).digest('hex').slice(0, 22);
    return hash === hashedEmail;
  }

  public async getFile(fileId: string, originalName: string): Promise<string | null> {
    if (Number.isNaN(fileId) || Number.isNaN(Number.parseFloat(fileId))) {
      return null;
    }

    const file = await this.fileRepository.getFileById(Number.parseInt(fileId));
    if (!file || (file.originalName !== originalName)) return null;

    return this.seaweedClient.read(file.fileKey);
  }

}
