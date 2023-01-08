import { Component, AfterViewInit, Input } from '@angular/core';
import * as Uppy from '@uppy/core';
import * as Dashboard from '@uppy/dashboard';
import * as XHRUpload from '@uppy/xhr-upload';
import * as FileUpload from '@uppy/file-input';
import * as Processbar from '@uppy/progress-bar';
import { ImageDatum } from '../../core/state/image-datum.model';
import { ImageDataService } from '../../core/state/image-data.service';

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
    const uppy = Uppy({
      debug: true,
      autoProceed: true,
    });

    if (this.useDashboard) {
      uppy.use(Dashboard, {
        inline: true,
        target: '.uploadContainer',
        wdith: 500,
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
