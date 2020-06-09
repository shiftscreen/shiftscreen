import { ModuleVersion } from 'types';
import View from './View';
import ConfigView from './Config';
import { ConfigType } from './types';

const HelloV1: ModuleVersion<ConfigType> = {
  name: 'v1',
  View,
  ConfigView,
};

export default HelloV1;
