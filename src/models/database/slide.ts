import { EntityBase } from './base';

export interface Slide extends EntityBase {
  isActive: boolean;
  durationMilliseconds: number;
  index: number;
  appId: string;
  appVersion: string;
  appConfig: string;
}

