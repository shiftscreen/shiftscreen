import { Module } from 'types';
import DefaultModule from './Default';
import WelcomeModule from './Welcome';

const modules: Module[] = [
  WelcomeModule,
];

export default modules;

export { DefaultModule };
