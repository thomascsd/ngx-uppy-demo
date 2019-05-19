import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { ImageDatum } from './image-datum.model';

export interface ImageDataState extends EntityState<ImageDatum> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'imageData', idKey: 'handle' })
export class ImageDataStore extends EntityStore<ImageDataState, ImageDatum> {
  constructor() {
    super();
  }
}
