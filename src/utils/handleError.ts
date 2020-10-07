import { ApolloError } from 'apollo-client';
import { message } from 'antd';
import { ErrorMessages } from 'constants/index';
import { ErrorCode } from 'types';

interface ErrorMessage {
  code: ErrorCode;
  text: string;
}

export const getErrorText = (error: any, defaultMessage: string = 'Wystąpił nieznany błąd') => {
  const errorMessage: string | ErrorMessage = error.message;
  return (typeof errorMessage !== 'string' && errorMessage.code !== undefined)
    ? ErrorMessages[errorMessage.code]
    : defaultMessage;
};

export const handleError = (error: ApolloError, defaultMessage?: string) => {
  console.error(error);

  error.graphQLErrors.forEach((error: any) => {
    const text = getErrorText(error, defaultMessage);
    message.error(text);
  });

  if (error.graphQLErrors.length === 0) {
    const text = getErrorText(error, defaultMessage);
    message.error(text);
  }
};
