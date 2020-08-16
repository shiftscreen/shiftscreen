import { Module } from 'types';
import { defaultConfig as defaultConfig__STABLE } from './stable/YouTubeUtils';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

library.add(faYoutube);

const YouTubeModule: Module = {
  id: 'YouTube',
  icon: faYoutube,
  title: 'YouTube',
  color: '#EF3333',
  hiddenPreview: true,
  blockDuration: true,
  versions: [
    {
      name: 'stable',
      defaultConfig: defaultConfig__STABLE,
    },
  ]
};

export default YouTubeModule;
