import { Inject } from 'typedi';
// import * as filestack from 'filestack-js';
// import { FileResponse } from '../interfaces/FileResponse';

@Inject()
export class FileService {
  //   constructor() {}
  //   async upload(fileData: any): Promise<FileResponse> {
  //     const client = filestack.init(process.env.FILESTACK_APIKEY);
  //     const res: FileResponse = await client.upload(fileData.data, {}, { filename: fileData.name });
  //     return res;
  //   }
}
