import { Module } from 'types';
import { defaultConfig as defaultConfig__STABLE } from './stable/CounterUtils';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';

library.add(faCalendarDay);

const CounterModule: Module = {
  id: 'Counter',
  icon: faCalendarDay,
  title: 'Odliczacz',
  color: '#253A49',
  hiddenPreview: false,
  versions: [
    {
      name: 'stable',
      defaultConfig: defaultConfig__STABLE,
    },
  ]
};

export default CounterModule;
