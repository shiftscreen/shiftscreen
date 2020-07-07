import { FileKey } from 'generated/graphql';

export type MediaType = 'image' | 'video';

export type MediaSourceType = 'url' | 'key';

export interface MediaSource {
  type: MediaSourceType;
  key?: FileKey;
  url?: string;
}
