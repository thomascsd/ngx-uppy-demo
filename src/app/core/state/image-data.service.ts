import { Injectable } from '@angular/core';
import { ImageDataStore } from './image-data.store';
import { ImageDatum } from './image-datum.model';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ImageDataService {
  constructor(private imageDataStore: ImageDataStore, private http: HttpClient) {}

  get() {
    const url = '/api/Image/Files';
    this.http.get(url).subscribe((entities: ImageDatum[]) => {
      this.imageDataStore.set(entities);
    });
  }

  add(entity: ImageDatum) {
    this.imageDataStore.add(entity);
  }
}
