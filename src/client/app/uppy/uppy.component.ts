import { Component, AfterViewInit } from '@angular/core';
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

  ngAfterViewInit(): void {
    const uppy = Uppy();

    uppy
      .use(Dashboard, {
        inline: true,
        target: '.uploadContainer'
      })
      .use(XHRUpload, {
        endpoint: '/api/upload',
        formData: true,
        fieldName: 'fileData'
      });
  }
}
