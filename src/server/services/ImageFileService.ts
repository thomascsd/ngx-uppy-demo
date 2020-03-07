import { Inject } from 'typedi';
import { RestDbService } from './RestDbService';
import { ImageFile } from '../../shared/models';

@Inject()
export class ImageFileService {
  constructor(private db: RestDbService) {}

  getFiles(): Promise<ImageFile[]> {
    return this.db.getDatas<ImageFile>('appEyFL0S9APmWraC', 'imageFile');
  }

  async upload(imageFile: ImageFile): Promise<ImageFile> {
    const res = await this.db.saveData<ImageFile>('appEyFL0S9APmWraC', 'imageFile', imageFile);

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
