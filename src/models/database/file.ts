import { EntityBase, ID } from './base';

export interface File extends EntityBase {
  title: string;
  filename: string;
  mimeType: string;
  sizeBytes: number;
}

export interface NewFileInput {
  title: string;
  file: Blob | undefined;
}

export interface UpdateFileInput {
  id: ID;
  title: string;
}
