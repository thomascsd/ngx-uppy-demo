import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { ImageDataStore, ImageDatum } from './';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ImageDataService {
  constructor(
    private imageDataStore: ImageDataStore,
    private http: HttpClient
  ) {}

  get() {
    const url = '/api/File';
    this.http.get(url).subscribe((entities: ImageDatum[]) => {
      this.imageDataStore.set(entities);
    });
  }

  add() {
    // this.http.post().subscribe((entity: ServerResponse) => {
    // this.imageDataStore.add(entity);
    // });
  }
}
