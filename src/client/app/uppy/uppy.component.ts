import { Component, AfterViewInit, Input } from '@angular/core';
import * as Uppy from '@uppy/core';
import * as Dashboard from '@uppy/dashboard';
import * as XHRUpload from '@uppy/xhr-upload';

@Component({
  selector: 'app-uppy',
  templateUrl: './uppy.component.html',
  styleUrls: ['./uppy.component.scss']
})
export class UppyComponent implements AfterViewInit {
  constructor() {}

  @Input() useDashboard = false;

  ngAfterViewInit(): void {
    const uppy = Uppy();

    uppy
      .use(Dashboard, {
        inline: true,
        target: '.uploadContainer'
      })
      .use(XHRUpload, {
        endpoint: '/api/file',
        formData: true,
        fieldName: 'fileData'
      });
  }
}
