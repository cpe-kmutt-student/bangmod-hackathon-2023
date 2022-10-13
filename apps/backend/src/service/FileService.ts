import multer, { FileFilterCallback, Multer, StorageEngine } from 'multer';
import path from 'path';
import { BadRequestException, Request } from 'springpress';

type File = Express.Multer.File;

export class FileService {

  private readonly documentUpload: Multer;
  private readonly sourceCodeUpload: Multer;

  public constructor(storageEngine: StorageEngine) {
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

}
