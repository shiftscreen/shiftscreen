import { client } from 'apollo';
import { ApolloError } from 'apollo-client';
import { message } from 'antd';

import { Api } from 'constants/index';
import { LoginData } from './LoginFormTypes';

export const handleCompleted = (data: LoginData) => {
  localStorage.setItem(Api.token, data.data.login.accessToken);
  client.writeData({ data: { isLoggedIn: true } });
};

export const handleError = (error: ApolloError) => {
  console.error(error);
  message.error('Niepoprawne dane logowania');
};
