import mime from 'mime';
import multer, { FileFilterCallback, Multer, StorageEngine } from 'multer';
import { BadRequestException, Request } from 'springpress';

type File = Express.Multer.File;

export class FileService {
  
  private readonly documentStorage: StorageEngine;
  private readonly documentUpload: Multer;

  public constructor(destination: string) {
    this.documentStorage = multer.diskStorage({
      destination: (req, file, cb) => cb(null, destination),
      filename: (req, file, cb) => cb(null, this.handleDocumentFileName(file)),
    });
    this.documentUpload = multer({
      storage: this.documentStorage,
      fileFilter: this.filterDocumentFile,
    });
  }

  private handleDocumentFileName(file: File) {
    const suffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
    return `${file.fieldname}-${suffix}.${mime.getExtension(file.mimetype)}`;
  }

  private filterDocumentFile(req: Request, file: File, cb: FileFilterCallback) {
    const allowedExtension = ['image/png', 'image/jpg', 'image/jpeg', 'application/pdf'];
    const isValid = allowedExtension.includes(file.mimetype);
    if (isValid) return cb(null, true);
    cb(new BadRequestException('This file extension not allowed'));
  }

  public uploadSingleDocument(fileName: string) {
    return this.documentUpload.single(fileName);
  }

  public uploadSingleSourcecode(fileName: string) {
    // TODO: Upload sourcecode
    return this.documentUpload.single(fileName);
  }

}
