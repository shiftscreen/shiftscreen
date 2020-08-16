import { MediaTypes } from 'shared';

export interface PhotoInstance {
  id: string;
  image?: MediaTypes.MediaSource;
}

export interface ConfigType {
  photosList: PhotoInstance[];
}
