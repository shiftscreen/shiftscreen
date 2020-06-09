import { Module } from 'types';
import DefaultModule from './Default';
import HelloModule from './Hello';

const modules: Module[] = [
  HelloModule,
];

export default modules;

export { DefaultModule };
