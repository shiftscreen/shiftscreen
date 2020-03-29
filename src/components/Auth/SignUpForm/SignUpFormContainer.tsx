import React from 'react';
import { Formik } from 'formik';
import { NewUserInput } from 'types';

import View from './SignInFormView';
import { initialValues, SignInSchema } from './SignInFormUtils';

const SignInForm: React.FC = () => {
  const handleSubmit = (values: NewUserInput) => {
    console.log(values)
  };

  return (
    <Formik<NewUserInput>
      initialValues={initialValues}
      validationSchema={SignInSchema}
      onSubmit={handleSubmit}
    >
      <View />
    </Formik>
  )
};

export default SignInForm;
