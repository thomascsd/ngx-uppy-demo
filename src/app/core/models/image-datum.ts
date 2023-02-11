export interface ImageDatum {
  handle: number;
  url: string;
  filename: string;
  size: number;
  mimetype: string;
  status: string;
}

export function createImageDatum(params: Partial<ImageDatum>) {
  return {
    url: '',
  } as ImageDatum;
}
