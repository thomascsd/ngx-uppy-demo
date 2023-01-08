export interface BaseObj {
  id: string;
  file?: AirTableFile[];
}

export interface AirTableFile {
  url: string;
  filename: string;
}

export class BaseModel implements BaseObj {
  id: string;
  file?: AirTableFile[];
}
