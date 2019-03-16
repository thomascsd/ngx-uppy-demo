import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, MatSnackBarModule],
  declarations: [],
  exports: [MatSnackBarModule]
})
export class MaterialModule {}
