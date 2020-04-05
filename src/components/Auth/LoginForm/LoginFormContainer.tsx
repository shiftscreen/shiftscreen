import React from 'react';
import { Formik } from 'formik';
import { useMutation } from '@apollo/react-hooks';
import { LoginInput } from 'types';

import View from './LoginFormView';
import { initialValues, LoginSchema, LOGIN } from './LoginFormUtils';
import { LoginData, LoginVars } from './LoginFormTypes';
import { handleCompleted, handleError } from './LoginFormOperations';

const LoginForm: React.FC = () => {
  const [login, { data }] = useMutation<LoginData, LoginVars>(
    LOGIN,
    {
      onCompleted: handleCompleted,
      onError: handleError,
    }
  );

  const handleSubmit = async (values: LoginInput) => (
    login({ variables: { data: values } })
  );

  return (
    <Formik<LoginInput>
      initialValues={initialValues}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
      component={View}
    />
  )
};

export default LoginForm;
