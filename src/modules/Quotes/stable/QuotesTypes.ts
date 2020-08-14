import { MediaTypes } from 'shared';
import { PredefinedQuotesType } from 'generated/graphql';

export interface QuoteInstance {
  id: string;
  content: string;
  author: string;
  imageType: 'beside' | 'background' | 'none';
  image?: MediaTypes.MediaSource;
}

export type SourceType = 'predefined' | 'config';

export interface ConfigType {
  sourceType: SourceType;
  predefinedList: PredefinedQuotesType;
  quotesList: QuoteInstance[];
}
