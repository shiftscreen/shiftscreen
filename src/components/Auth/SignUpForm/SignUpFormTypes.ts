import { User, NewUserInput } from 'types';

export interface AddUserData {
  addUser: User;
}

export interface AddUserVars {
  values: NewUserInput;
}
