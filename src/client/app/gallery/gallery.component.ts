import { Component, OnInit } from '@angular/core';
import { ImageDatum, ImageDataQuery } from '../core/state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  images: Observable<ImageDatum[]>;

  constructor(private imageDataQuery: ImageDataQuery) {}

  ngOnInit() {
    this.images = this.imageDataQuery.selectActive() as Observable<
      ImageDatum[]
    >;
  }
}
