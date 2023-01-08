import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  imports: [CommonModule, MatSlideToggleModule],
  declarations: [],
  exports: [MatSlideToggleModule]
})
export class MaterialModule {}
