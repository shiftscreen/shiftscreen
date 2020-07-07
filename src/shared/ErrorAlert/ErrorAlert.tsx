import React from 'react';
import { Alert } from 'antd';

interface Props {
  error: any;
}

const ErrorAlert: React.FC<Props> = ({ error }) => {
  console.error(error);

  return (
    <Alert
      message="Wystąpił błąd"
      type="error"
      showIcon
    />
  );
};

export default ErrorAlert;
