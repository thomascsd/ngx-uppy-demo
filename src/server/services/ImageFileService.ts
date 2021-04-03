import { Inject } from 'typedi';
import { RestDbService } from './RestDbService';
import { FileService } from './FileService';
import { ImageFile } from '../../shared/models';

@Inject()
export class ImageFileService {
  constructor(private db: RestDbService, private fileService: FileService) {}

  getFiles(): Promise<ImageFile[]> {
    return this.db.getDatas<ImageFile>('appEyFL0S9APmWraC', 'imageFile');
  }

  async upload(fileData: any): Promise<ImageFile> {
    // const fileRes = await this.fileService.upload(fileData);
    const imageFile = new ImageFile();

    imageFile.filename = fileData.filename;
    imageFile.id = '';
    imageFile.mimetype = fileData.mimetype;
    imageFile.size = fileData.size;
    imageFile.file = [
      {
        url: `${process.env.IMAGE_URL_DOMAIN}/uploadFiles/${fileData.filename}`,
        filename: fileData.filename,
      },
    ];
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
