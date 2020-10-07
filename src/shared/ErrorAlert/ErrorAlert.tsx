import React from 'react';
import * as R from 'ramda';
import { Alert } from 'antd';
import { getErrorText } from 'utils';
import { ApolloError } from 'apollo-client';

interface Props {
  error?: ApolloError;
}

const ErrorAlert: React.FC<Props> = ({ error }) => {
  console.error(error);
  const toAlert = (err: any) => {
    const message = getErrorText(err);

    return (
      <Alert
        message={message}
        type="error"
        showIcon
      />
    )
  };

  if (!error) return (
    <Alert
      message="Wystąpił nieznany błąd"
      type="error"
      showIcon
    />
  );

  return (
    <React.Fragment>
      {R.map(toAlert, error.graphQLErrors)}
    </React.Fragment>
  );
};

export default ErrorAlert;
