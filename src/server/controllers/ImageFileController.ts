import { JsonController, Get, Post, UploadedFile } from 'routing-controllers';
import * as multer from 'multer';
import { Inject } from 'typedi';
import { ImageFileService } from '../services/ImageFileService';

const fileUploadOptions = () => {
  storage: multer.diskStorage({
    destination: (req: any, file: any, cb: any) => {
      cb(null, '/uploadFiles');
    },
    filename: (req: any, file: any, cb: any) => {
      cb(null, '123');
    },
  });
};

@JsonController()
@Inject()
export class ImageFileController {
  constructor(private fileService: ImageFileService) {}

  @Get('/file')
  getFiles() {
    return this.fileService.getFiles();
  }

  @Post('/file')
  uploadFile(@UploadedFile('fileData', { options: fileUploadOptions }) file: any) {
    return this.fileService.upload(file);
  }
}
