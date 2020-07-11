import { Module } from 'types';
import { defaultConfig as defaultConfig__STABLE } from './stable/WelcomeUtils';

const WelcomeModule: Module = {
  id: 'Welcome',
  icon: 'handshake',
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
