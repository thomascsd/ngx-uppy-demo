import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UppyComponent } from './uppy/uppy.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [HeaderComponent, FooterComponent, UppyComponent, GalleryComponent],
  exports: [HeaderComponent, FooterComponent, UppyComponent, GalleryComponent]
})
export class SharedModule {}
