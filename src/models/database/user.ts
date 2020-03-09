import { EntityBase } from './base';

export interface User extends EntityBase {
  email: string;
  firstName: string;
  lastName: string;
}

