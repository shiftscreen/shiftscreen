import { Module } from 'types';
import { defaultConfig as defaultConfig__STABLE } from './stable/CalendarUtils';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faCalendarAlt);

const CalendarModule: Module = {
  id: 'Calendar',
  icon: faCalendarAlt,
  title: 'Kalendarz',
  color: '#508DB7',
  hiddenPreview: false,
  versions: [
    {
      name: 'stable',
      defaultConfig: defaultConfig__STABLE,
    },
  ]
};

export default CalendarModule;
