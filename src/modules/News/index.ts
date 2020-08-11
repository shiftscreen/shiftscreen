import { Module } from 'types';
import { defaultConfig as defaultConfig__STABLE } from './stable/NewsUtils';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

library.add(faNewspaper);

const NewsModule: Module = {
  id: 'News',
  icon: faNewspaper,
  title: 'Gazetka',
  color: '#51768F',
  hiddenPreview: true,
  versions: [
    {
      name: 'stable',
      defaultConfig: defaultConfig__STABLE,
    },
  ]
};

export default NewsModule;
