import { EntityBase } from './base';

export interface File extends EntityBase {
  title: string;
  filename: string;
  mimeType: string;
  sizeKilobytes: number;
}

export interface NewFileInput {
  title: string;
  file: Blob | undefined;
}

export interface UpdateFileInput {
  title?: string;
}
