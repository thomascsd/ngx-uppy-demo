import { Component, AfterViewInit, Input } from '@angular/core';
import * as Uppy from '@uppy/core';
import * as Dashboard from '@uppy/dashboard';
import * as XHRUpload from '@uppy/xhr-upload';
import * as FileUpload from '@uppy/file-input';

@Component({
  selector: 'app-uppy',
  templateUrl: './uppy.component.html',
  styleUrls: ['./uppy.component.scss']
})
export class UppyComponent implements AfterViewInit {
  constructor() {}

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
  }
}
