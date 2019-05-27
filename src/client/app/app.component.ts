import { Component } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  useDashboard = false;
  useFileUpload = true;

  chageDashboard(value: MatSlideToggleChange) {
    this.useDashboard = value.checked;
  }

  changeFileUpload(value: MatSlideToggleChange) {
    this.useFileUpload = value.checked;
  }
}
