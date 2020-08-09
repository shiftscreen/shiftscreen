import { Module } from 'types';
import { defaultConfig as defaultConfig__STABLE } from './stable/VideoUtils';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faVideo } from '@fortawesome/free-solid-svg-icons';

library.add(faVideo);

const YouTubeModule: Module = {
  id: 'Video',
  icon: faVideo,
  title: 'Wideo',
  color: '#2C3861',
  hiddenPreview: true,
  versions: [
    {
      name: 'stable',
      defaultConfig: defaultConfig__STABLE,
    },
  ]
};

export default YouTubeModule;
