import { Component, AfterViewInit, Input } from '@angular/core';
import Uppy from '@uppy/core';
import Dashboard from '@uppy/dashboard';
import XHRUpload from '@uppy/xhr-upload';
import FileUpload from '@uppy/file-input';
import Processbar from '@uppy/progress-bar';
import { ImageDatum } from '../../core/models/image-datum';
import { ImageDataService } from '../../core/services/image-data.service';

@Component({
  selector: 'app-uppy',
  templateUrl: './uppy.component.html',
  styleUrls: ['./uppy.component.scss'],
})
export class UppyComponent implements AfterViewInit {
  @Input() useDashboard = false;
  @Input() useFileUpload = false;

  constructor(private imageDataService: ImageDataService) {}

  ngAfterViewInit(): void {
    const uppy = new Uppy({
      debug: true,
      autoProceed: true,
    });

    if (this.useDashboard) {
      uppy.use(Dashboard, {
        inline: true,
        target: '.uploadContainer',
        width: 500,
        height: 300,
      });
    }

    if (this.useFileUpload) {
      uppy
        .use(FileUpload, {
          pretty: true,
          target: '.uploadContainer',
          inputName: 'fileData',
        })
        .use(Processbar, {
          target: 'body',
          fixed: true,
          hideAfterFinish: true,
        });
    }

    uppy.use(XHRUpload, {
      endpoint: '/api/File/Upload',
      formData: true,
      fieldName: 'fileData',
    });

    uppy.on('upload-success', (file, response: any) => {
      this.imageDataService.add(response.body as ImageDatum);
    });
  }
}
