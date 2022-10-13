import { SeaweedClient } from '@/utils/seaweedfs/SeaweedClient';
import { Request } from 'express';
import { StorageEngine } from 'multer';

export class SeaweedStorageEngine implements StorageEngine {

  private readonly seaweedClient: SeaweedClient;

  public constructor(seaweedClient: SeaweedClient) {
    this.seaweedClient = seaweedClient;
  }   
  
  public async _handleFile(
    req: Request, file: File, callback: (error?: any, info?: Partial<File>) => void
  ): Promise<void> {
    try {
      const fileId = await this.seaweedClient.write(file.stream);
      // Add field `filename` to retrieve file id later
      callback(null, { filename: fileId });
    } catch (error) {
      callback(error);
    }
  }
  
  public _removeFile(
    req: Request, file: File, callback: (error: Error | null) => void
  ): void {
    // TODO
  }

}

type File = Express.Multer.File;
