import React from 'react';
import { Formik } from 'formik';
import { NewUserInput } from 'types';
import { Alert } from 'antd';

import View from './SignUpFormView';
import { initialValues, SignUpSchema } from './SignUpFormUtils';
import { useAddUserMutation } from 'generated/graphql';
import { handleError } from 'utils';

const SignUpForm: React.FC = () => {
  const [addUser, { data }] = useAddUserMutation({
    onError: handleError,
  });

  const handleSubmit = async (values: NewUserInput) => {
    (values as any).confirmPassword = undefined;
    await addUser({ variables: { values } });
  };

  return (
    <>
      <Formik<NewUserInput>
        initialValues={initialValues}
        validationSchema={SignUpSchema}
        onSubmit={handleSubmit}
        component={View}
      />
      {!!data && (
        <Alert
          message="Twoje konto zostało pomyślnie utworzone. Teraz się zaloguj."
          type="success"
        />
      )}
    </>
  );
};

export default SignUpForm;
