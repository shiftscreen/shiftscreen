import { EntityBase } from './base';

export interface File extends EntityBase {
  title: string;
  filename: string;
  mimeType: string;
  sizeBytes: number;
}

export interface NewFileInput {
  title: string;
  file: Blob | null;
}
