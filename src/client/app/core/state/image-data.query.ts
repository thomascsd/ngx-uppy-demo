import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ImageDataStore, ImageDataState } from './image-data.store';
import { ImageDatum } from './image-datum.model';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ImageDataQuery extends QueryEntity<ImageDataState, ImageDatum> {
  constructor(protected store: ImageDataStore) {
    super(store);
  }
}
