import * as filestack from 'filestack-js';
import * as crypto from 'crypto';
import { FileResponse } from '../interfaces/FileResponse';
import { DataBase } from '../db';

export class FileService {
  private db: DataBase;
  constructor() {
    this.db = new DataBase();
  }

  getFiles(): FileResponse[] {
    return this.db.getDatas();
  }

  async upload(fileData: any): Promise<FileResponse> {
    const client = filestack.init(process.env.FILESTACK_APIKEY);
    const security = {
      policy: this.getPolicy(''),
      signature: this.getSignature('')
    };

    const res: FileResponse = await client.upload(
      fileData.data,
      {},
      { filename: fileData.name },
      security
    );

    this.db.write(res);

    return res;
  }

  async delete(key: string) {
    const client = filestack.init(process.env.FILESTACK_APIKEY);
    const security = {
      policy: this.getPolicy(key),
      signature: this.getSignature(key)
    };
    const res = await client.remove(key, security);

    return res;
  }

  getPolicy(key: string) {
    const now = new Date();
    now.setFullYear(now.getFullYear() + 1);
    const d = new Date(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate(),
      0,
      0,
      0
    );
    const expiry = d.getTime();
    const call = ['remove', 'pick', 'read'];
    const json = {
      expiry,
      call
    };

    if (key) {
      json['handle'] = key;
    }

    const policy = Buffer.from(JSON.stringify(json)).toString('base64');

    console.log(`date:${JSON.stringify(d)}`);
    console.log(`json:${JSON.stringify(json)}`);
    console.log(`policy:${policy}`);
    return policy;
  }

  getSignature(key: string) {
    const hmac = crypto.createHmac('sha256', process.env.FILESTACK_SECRET);
    const policy = this.getPolicy(key);

    hmac.update(policy);
    const signature = hmac.digest('hex');

    console.log(`FILESTACK_SECRET:${process.env.FILESTACK_SECRET}`);
    console.log(`signature:${signature}`);
    return signature;
  }
}
