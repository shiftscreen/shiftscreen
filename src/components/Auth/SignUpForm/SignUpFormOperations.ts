import { ApolloError } from 'apollo-client';
import { message } from 'antd';

export const handleError = (error: ApolloError) => {
  console.error(error);
  message.error('Wystąpił błąd');
};
