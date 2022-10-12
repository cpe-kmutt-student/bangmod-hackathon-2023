import { SeaweedClient } from '@/utils/seaweedfs/SeaweedClient';
import { Request } from 'express';
import { StorageEngine } from 'multer';

export class SeaweedStorageEngine implements StorageEngine {

  private readonly seaweedClient: SeaweedClient;

  public constructor(seaweedClient: SeaweedClient) {
    this.seaweedClient = seaweedClient;
  }   
  
  public async _handleFile(
    req: Request, file: File, callback: (error?: any, info?: Partial<File> | undefined) => void
  ): Promise<void> {
    try {
      const fileId = await this.seaweedClient.write(file.stream);
      console.log(fileId);
      callback(null, file);
    } catch {
      // callback(null, false);
    }
  }
  
  public _removeFile(
    req: Request, file: File, callback: (error: Error | null) => void
  ): void {
  }

}

type File = Express.Multer.File;
