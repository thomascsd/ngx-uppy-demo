import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';
import { GallerizeModule } from '@ngx-gallery/gallerize';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { LayoutComponent } from './layout/layout.component';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { UppyComponent } from './uppy/uppy.component';
import { GalleryComponent } from './gallery/gallery.component';
import { environment } from '../environments/environment';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    UppyComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    GalleryModule,
    LightboxModule,
    GallerizeModule,
    MaterialModule,
    environment.production ? [] : AkitaNgDevtools.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
