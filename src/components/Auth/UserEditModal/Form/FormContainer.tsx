import React from 'react';
import { Formik, FormikProps } from 'formik';
import { BasicUserPartsFragment, UpdateUserInput } from 'types';

import View from './FormView';
import { UserEditSchema } from './FormUtils';

interface Props {
  formikRef: React.Ref<FormikProps<UpdateUserInput> | undefined>
  onSubmit(values: UpdateUserInput): Promise<void>;
  user: BasicUserPartsFragment;
}

const UserEditForm: React.FC<Props> = (props) => {
  const {
    onSubmit,
    formikRef,
    user,
  } = props;

  const { email, firstName, lastName } = user;

  const initialValues: UpdateUserInput = {
    ...{ email, firstName, lastName },
  };

  return (
    <Formik<UpdateUserInput>
      initialValues={initialValues}
      validationSchema={UserEditSchema}
      onSubmit={onSubmit}
      enableReinitialize

      // @ts-ignore due to invalid Formik typings
      innerRef={formikRef}
    >
      <View/>
    </Formik>
  );
};

export default UserEditForm;
