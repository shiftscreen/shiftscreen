import { Module } from 'types';
import { defaultConfig as defaultConfig__STABLE } from './stable/WebsiteUtils';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

library.add(faGlobe);

const WebsiteModule: Module = {
  id: 'Website',
  icon: faGlobe,
  title: 'Strona',
  color: '#98A9B4',
  hiddenPreview: true,
  versions: [
    {
      name: 'stable',
      defaultConfig: defaultConfig__STABLE,
    },
  ]
};

export default WebsiteModule;
