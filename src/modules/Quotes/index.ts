import { Module } from 'types';
import { defaultConfig as defaultConfig__STABLE } from './stable/QuotesUtils';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

library.add(faQuoteLeft);

const QuotesModule: Module = {
  id: 'Quotes',
  icon: faQuoteLeft,
  title: 'Cytaty',
  color: '#2C88C5',
  hiddenPreview: true,
  versions: [
    {
      name: 'stable',
      defaultConfig: defaultConfig__STABLE,
    },
  ]
};

export default QuotesModule;
