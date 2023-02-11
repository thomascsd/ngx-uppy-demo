import { Component, OnInit } from '@angular/core';
import { ImageDataService } from '../../core/services/image-data.service';
import { Observable } from 'rxjs';
import { ImageDatum } from '../../core/models/image-datum';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  images$: Observable<ImageDatum[]>;

  constructor(private imageDataService: ImageDataService) {}

  ngOnInit() {
    this.images$ = this.imageDataService.get();
  }
}
