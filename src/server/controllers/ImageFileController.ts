import { JsonController, Get, Post, UploadedFile } from 'routing-controllers';
import { Inject } from 'typedi';
import { ImageFileService } from '../services/ImageFileService';

@JsonController()
@Inject()
export class ImageFileController {
  constructor(private fileService: ImageFileService) {}

  @Get('/Image/Files')
  getFiles() {
    return this.fileService.getFiles();
  }
}
