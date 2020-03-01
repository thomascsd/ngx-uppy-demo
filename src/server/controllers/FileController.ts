import { JsonController, Get, Post, Body } from 'routing-controllers';
import { Inject } from 'typedi';
import { FileService } from '../services/fileService';

@JsonController()
@Inject()
export class FileController {
  constructor(private fileService: FileService) {}

  @Get('/file')
  getFiles() {
    return this.fileService.getFiles();
  }

  @Post('/file')
  uploadFile() {}
}
