import { Inject } from 'typedi';
import { RestDbService } from './RestDbService';
import { FileModel } from '../../shared/models/FileModel';

@Inject()
export class FileService {
  constructor(private db: RestDbService) {}

  getFiles(): Promise<FileModel[]> {
    return this.db.getDatas<FileModel>('/file');
  }

  async upload(fileData: FileModel): Promise<FileModel> {
    const res = await this.db.saveData<FileModel>('/file', fileData);

    return res;
  }

  async delete(key: string) {
    // const client = filestack.init(process.env.FILESTACK_APIKEY);
    // const security = {
    //   policy: this.getPolicy(key),
    //   signature: this.getSignature(key)
    // };
    // const res = await client.remove(key, security);
    // return res;
  }
}
