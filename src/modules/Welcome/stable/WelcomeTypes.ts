import { MediaTypes } from 'types';

export interface TextType {
  highlightedColor: string;
}

export interface BorderType {
  width: number;
  color: string;
}

export interface ConfigType {
  name: string;
  text: TextType;
  border: BorderType;
  image: MediaTypes.MediaSource;
}
