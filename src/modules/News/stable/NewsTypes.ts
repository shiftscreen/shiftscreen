import { MediaTypes } from 'shared';

export interface NewsInstance {
  id: string;
  title: string;
  description: string;
  image?: MediaTypes.MediaSource;
}

export type SourceType = 'config' | 'rss';

export interface ConfigType {
  domain: string;
  sourceType: SourceType;
  rssUrl?: string;
  newsList: NewsInstance[];
}
