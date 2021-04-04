import { Controller, Post, UploadedFile } from 'routing-controllers';
import * as multer from 'multer';
import { Inject } from 'typedi';
import { ImageFileService } from '../services/ImageFileService';

const fileUploadOptions = {
  storage: multer.diskStorage({
    destination: 'uploadFiles',
  }),
};

@Controller()
@Inject()
export class FileController {
  constructor(private fileService: ImageFileService) {}

  @Post('/File/Upload')
  upload(@UploadedFile('fileData', { options: fileUploadOptions }) file: Express.Multer.File) {
    return this.fileService.upload(file);
  }
}
