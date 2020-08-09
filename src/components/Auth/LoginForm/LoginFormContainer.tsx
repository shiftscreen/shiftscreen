import React from 'react';
import { Formik } from 'formik';
import { LoginInput } from 'types';

import View from './LoginFormView';
import { initialValues, LoginSchema } from './LoginFormUtils';
import { handleCompleted, handleError } from './LoginFormOperations';
import { useLoginMutation } from 'generated/graphql';

const LoginForm: React.FC = () => {
  const [login] = useLoginMutation({
    onCompleted: handleCompleted,
    onError: handleError,
  });

  const handleSubmit = async (values: LoginInput) => (
    login({ variables: { values } })
  );

  return (
    <Formik<LoginInput>
      initialValues={initialValues}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
      component={View}
    />
  );
};

export default LoginForm;
