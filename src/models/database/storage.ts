import { EntityBase } from './base';

export interface Storage extends EntityBase {
  usedKilobytes: number;
  maxKilobytes: number;
}
