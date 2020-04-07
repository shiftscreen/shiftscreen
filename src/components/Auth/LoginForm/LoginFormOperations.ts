import { ApolloError } from 'apollo-client';
import { message } from 'antd';
import * as H from 'history';
import { Path } from 'types';

import { client } from 'apollo';
import { Api } from 'constants/index';
import { LoginMutation } from 'generated/graphql';

export const handleCompleted = (data: LoginMutation, history: H.History) => {
  localStorage.setItem(Api.token, data.login.accessToken);
  client.writeData({ data: { isLoggedIn: true } });
  history.push(Path.Panel);
};

export const handleError = (error: ApolloError) => {
  console.error(error);
  message.error('Niepoprawne dane logowania');
};
