import { Component, AfterViewInit, Input } from '@angular/core';
import * as Uppy from '@uppy/core';
import * as Dashboard from '@uppy/dashboard';
import * as XHRUpload from '@uppy/xhr-upload';
import * as FileUpload from '@uppy/file-input';
import { ImageDatum } from '../core/state/image-datum.model';
import { ImageDataService } from '../core/state/image-data.service';

@Component({
  selector: 'app-uppy',
  templateUrl: './uppy.component.html',
  styleUrls: ['./uppy.component.scss']
})
export class UppyComponent implements AfterViewInit {
  constructor(private imageDataService: ImageDataService) {}

  @Input() useDashboard = false;
  @Input() useFileUpload = false;

  ngAfterViewInit(): void {
    const uppy = Uppy({
      debug: true,
      autoProceed: true
    });

    if (this.useDashboard) {
      uppy.use(Dashboard, {
        inline: true,
        target: '.uploadContainer'
      });
    }

    if (this.useFileUpload) {
      uppy.use(FileUpload, {
        pretty: true,
        target: '.uploadContainer',
        inputName: 'fileData'
      });
    }

    uppy.use(XHRUpload, {
      endpoint: '/api/file',
      formData: true,
      fieldName: 'fileData'
    });

    uppy.on('upload-success', (file, response: any) => {
      this.imageDataService.add(response.body as ImageDatum);
    });
  }
}
