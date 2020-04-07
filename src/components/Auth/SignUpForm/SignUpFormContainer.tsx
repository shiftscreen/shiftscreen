import React from 'react';
import { Formik } from 'formik';
import { NewUserInput } from 'types';
import { useMutation } from '@apollo/react-hooks';
import { Alert } from 'antd';
import * as R from 'ramda';

import View from './SignUpFormView';
import { initialValues, SignUpSchema, ADD_USER } from './SignUpFormUtils';
import { AddUserData, AddUserVars } from './SignUpFormTypes';
import { handleError } from './SignUpFormOperations';

const SignUpForm: React.FC = () => {
  const [addUser, { data }] = useMutation<AddUserData, AddUserVars>(
    ADD_USER,
    {
      onError: handleError,
    }
  );

  const handleSubmit = async (values: NewUserInput) => {
    (values as any).confirmPassword = undefined;
    return addUser({ variables: { values } });
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
  )
};

export default SignUpForm;
