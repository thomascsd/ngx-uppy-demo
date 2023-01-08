import { BaseModel } from './BaseModel';
export class ImageFile extends BaseModel {
  filename: string;
  size: number;
  mimetype: string;
}
