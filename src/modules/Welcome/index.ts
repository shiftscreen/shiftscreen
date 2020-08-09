import { Module } from 'types';
import { defaultConfig as defaultConfig__STABLE } from './stable/WelcomeUtils';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';

library.add(faHandshake);

const WelcomeModule: Module = {
  id: 'Welcome',
  icon: faHandshake,
  title: 'Powitanie',
  color: '#FDB827',
  versions: [
    {
      name: 'stable',
      defaultConfig: defaultConfig__STABLE,
    },
  ]
};

export default WelcomeModule;
