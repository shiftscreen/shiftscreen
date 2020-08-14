import { PredefinedQuotesType } from 'generated/graphql';
import { ConfigType } from './QuotesTypes';

export const defaultConfig: ConfigType = {
  quotesList: [],
  sourceType: 'predefined',
  predefinedList: PredefinedQuotesType.Motivational,
};
