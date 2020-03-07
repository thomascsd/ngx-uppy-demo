import { JsonController, Get, Post, Body } from 'routing-controllers';
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
  uploadFile() {}
}
