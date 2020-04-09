import { EntityBase } from './base';

export interface Screen extends EntityBase {
  title: string;
  isActive: boolean;
}

export interface NewScreenInput {
  title: string;
}

export interface UpdateScreenInput {
  title?: string;
  isActive?: boolean;
}
