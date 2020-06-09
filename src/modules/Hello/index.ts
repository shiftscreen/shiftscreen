import { Module } from 'types';
import HelloV1 from './HelloV1';

const HelloModule: Module = {
  id: 'hello',
  title: 'Powitanie',
  versions: [
    HelloV1,
  ]
};

export default HelloModule;
