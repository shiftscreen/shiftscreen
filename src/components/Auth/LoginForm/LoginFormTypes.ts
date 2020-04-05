import { LoginInput, TokenResponse } from 'types';

export interface LoginData {
  data: {
    login: TokenResponse;
  };
}

export interface LoginVars {
  data: LoginInput;
}
