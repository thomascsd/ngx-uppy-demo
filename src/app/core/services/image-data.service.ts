import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageDatum } from '../models/image-datum';

@Injectable({ providedIn: 'root' })
export class ImageDataService {
  constructor(private http: HttpClient) {}

  get() {
    const url = '/api/Image/Files';
    return this.http.get<ImageDatum[]>(url);
  }

  add(data: ImageDatum) {}
}
