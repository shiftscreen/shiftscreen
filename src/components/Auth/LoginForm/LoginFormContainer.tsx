import React from 'react';
import { Formik } from 'formik';
import { LoginInput } from 'types';
import { useHistory } from 'react-router-dom';

import View from './LoginFormView';
import { initialValues, LoginSchema } from './LoginFormUtils';
import { handleCompleted, handleError } from './LoginFormOperations';
import { useLoginMutation, LoginMutation } from 'generated/graphql';

const LoginForm: React.FC = () => {
  const history = useHistory();
  const [login] = useLoginMutation({
    onCompleted: (data: LoginMutation) => handleCompleted(data, history),
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
  )
};

export default LoginForm;
