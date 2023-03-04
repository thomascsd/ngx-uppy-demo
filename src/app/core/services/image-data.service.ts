import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageDatum } from '../models/image-datum';
import { environment } from './../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ImageDataService {
  constructor(private http: HttpClient) {}

  get() {
    const url = `${environment.apiUrl}/api/images/files`;
    return this.http.get<ImageDatum[]>(url);
  }
}
