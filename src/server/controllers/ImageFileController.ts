import { JsonController, Get, Post, Body, UploadedFile } from 'routing-controllers';
import { Inject } from 'typedi';
import { ImageFileService } from '../services/ImageFileService';

@JsonController()
@Inject()
export class ImageFileController {
  constructor(private fileService: ImageFileService) {}

  @Get('/file')
  getFiles() {
    return this.fileService.getFiles();
  }

  @Post('/file')
  uploadFile(@UploadedFile('fileData') file: any) {
    return this.fileService.upload(file);
  }
}
