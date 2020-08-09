import { ApolloError } from 'apollo-client';
import { message } from 'antd';
import { PanelTypes, Path } from 'types';

import { auth } from 'utils';
import { LoginMutation } from 'generated/graphql';
import { generatePath } from 'react-router';
import dayjs from 'dayjs';

const panelPath = generatePath(Path.PanelElement, {
  element: PanelTypes.PanelPath.Screens,
});

export const handleCompleted = (data: LoginMutation) => {
  const { accessToken, expiresIn } = data.login;
  const tokenExpirationTimestamp = dayjs().add(expiresIn, 'second').unix();

  auth.login(accessToken, tokenExpirationTimestamp);

  window.location.replace(panelPath);
};

export const handleError = (error: ApolloError) => {
  console.error(error);
  message.error('Niepoprawne dane logowania');
};
