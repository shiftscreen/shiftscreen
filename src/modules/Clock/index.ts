import { Module } from 'types';
import { defaultConfig as defaultConfig__STABLE } from './stable/ClockUtils';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faClock } from '@fortawesome/free-solid-svg-icons';

library.add(faClock);

const ClockModule: Module = {
  id: 'Clock',
  icon: faClock,
  title: 'Zegar',
  color: '#43B2FF',
  hiddenPreview: false,
  versions: [
    {
      name: 'stable',
      defaultConfig: defaultConfig__STABLE,
    },
  ]
};

export default ClockModule;
