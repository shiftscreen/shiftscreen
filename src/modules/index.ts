import { Module } from 'types';
import DefaultModule from './Default';
import Welcome from './Welcome';
import Website from './Website';
import YouTube from './YouTube';
import Video from './Video';
import News from './News';
import Calendar from './Calendar';
import Quotes from './Quotes';
import Clock from './Clock';
import Counter from './Counter';
import Gallery from './Gallery';

const modules: Module[] = [
  Welcome,
  Website,
  YouTube,
  Video,
  News,
  Calendar,
  Quotes,
  Clock,
  Counter,
  Gallery,
];

export default modules;

export { DefaultModule };
