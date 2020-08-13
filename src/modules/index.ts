import { Module } from 'types';
import DefaultModule from './Default';
import Welcome from './Welcome';
import Website from './Website';
import YouTube from './YouTube';
import Video from './Video';
import News from './News';
import Calendar from './Calendar';

const modules: Module[] = [
  Welcome,
  Website,
  YouTube,
  Video,
  News,
  Calendar,
];

export default modules;

export { DefaultModule };
