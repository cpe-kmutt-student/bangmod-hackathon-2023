import FormData from 'form-data';
import http from 'http';

export class SeaweedClient {

  private readonly host: string;
  private readonly port: number;

  public constructor(host: string, port: number) {
    this.host = host;
    this.port = port;
  }

  public healthCheck(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      http
        .request({
          host: this.host,
          port: this.port,
          method: 'GET',
        })
        .on('response', resolve)
        .on('error', reject)
        .end();
    });
  }

  public assignVolume(): Promise<VolumeData> {
    return new Promise((resolve, reject) => {
      const request = http.request({
        host: this.host,
        port: this.port,
        method: 'GET',
        path: '/dir/assign',
      });

      request
        .on('response', (response) => {
          let body = '';
          response
            .setEncoding('utf-8')
            .on('data', (chunk) => body += chunk)
            .on('end', () => resolve(JSON.parse(body)));
        })
        .on('error', reject)
        .end();
    });
  }
  
  public write(stream: NodeJS.ReadableStream): Promise<string> {
    return new Promise(async (resolve, reject) => {
      try {
        const volumeData = await this.assignVolume();
        const volumeUrl = volumeData.publicUrl.split(':');
        const fileId = volumeData.fid;

        const form = new FormData();
        form.append('file', stream);

        const request = http.request({
          host: volumeUrl[0],
          port: volumeUrl[1],
          method: 'POST',
          path: '/' + fileId,
          headers: form.getHeaders(),
        });

        form.pipe(request);

        request
          .on('response', (response) => {
            if (response.statusCode === 201) {
              resolve(fileId);
            } else {
              reject(new Error(`Response with code ${response.statusCode}`));
            }
          })
          .on('error', reject)
          .on('socket', (socket) => socket.on('error', reject))

        stream.on('error', reject);
      } catch (error: unknown) {
        reject(error);
      }
    });
  }

  public lookup(fileId: string): Promise<VolumeLocation> {
    return new Promise((resolve, reject) => {
      const request = http.request({
        host: this.host,
        port: this.port,
        method: 'GET',
        path: '/dir/lookup?volumeId=' + fileId,
      });

      request
        .on('response', (response) => {
          let body = '';
          response
            .setEncoding('utf-8')
            .on('data', (chunk) => body += chunk)
            .on('end', () => resolve(JSON.parse(body)));
        })
        .on('error', reject)
        .end();
    });
  }

  public async read(fileId: string): Promise<string | null> {
    const volumeLocations = await this.lookup(fileId);
    if (!volumeLocations.locations) return null;
    return 'http://' + volumeLocations.locations[0].publicUrl + '/' + fileId;
  }

  public remove(): Promise<void> {
    return new Promise((resolve, reject) => {
      // TODO
    });
  }

}

type VolumeData = {
  count: number,
  fid: string,
  url: string,
  publicUrl: string,
};

type VolumeLocation = {
  volumeOrFileId: string,
  locations: {
    url: string,
    publicUrl: string,
    dataCenter: string,
  }[],
};
