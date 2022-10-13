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
      fileFilter: this.filterDocumentFile,
    });
    this.sourceCodeUpload = multer({
      storage: storageEngine,
      fileFilter: this.filterSourceCodeFile,
    });
  }

  private filterDocumentFile(req: Request, file: File, cb: FileFilterCallback) {
    const allowedMimes = ['image/png', 'image/jpg', 'image/jpeg', 'application/pdf'];
    const isValid = allowedMimes.includes(file.mimetype);
    if (isValid) return cb(null, true);
    cb(new BadRequestException('This file extension not allowed'));
  }

  private filterSourceCodeFile(req: Request, file: File, cb: FileFilterCallback) {
    const allowedExtension = ['.c', '.cc', '.cpp', '.java'];
    const isValid = allowedExtension.includes(path.extname(file.originalname));
    if (isValid) return cb(null, true);
    cb(new BadRequestException('This file extension not allowed'));
  }

  public uploadSingleDocument(fileName: string) {
    return this.documentUpload.single(fileName);
  }

  public uploadSingleSourcecode(fileName: string) {
    return this.sourceCodeUpload.single(fileName);
  }

}
