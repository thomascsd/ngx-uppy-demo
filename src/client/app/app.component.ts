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
}
