import React from 'react';
import { Formik } from 'formik';
import { NewUserInput } from 'types';

import View from './SignUpFormView';
import { initialValues, SignUpSchema } from './SignUpFormUtils';

const SignUpForm: React.FC = () => {
  const handleSubmit = (values: NewUserInput) => {
    console.log(values)
  };

  return (
    <Formik<NewUserInput>
      initialValues={initialValues}
      validationSchema={SignUpSchema}
      onSubmit={handleSubmit}
      component={View}
    />
  )
};

export default SignUpForm;
