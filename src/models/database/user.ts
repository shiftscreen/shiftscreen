import { EntityBase } from './base';

export interface User extends EntityBase {
  email: string;
  firstName: string;
  lastName: string;
}

export interface NewUserInput {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  rulesAccepted: boolean;
}
