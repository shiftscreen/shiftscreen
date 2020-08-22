import React from 'react';
import { Formik, FormikProps } from 'formik';
import { NewOrganizationInput } from 'types';

import View from './FormView';
import { AddOrganizationSchema, initialValues } from './FormUtils';

interface Props {
  formikRef: React.Ref<FormikProps<NewOrganizationInput> | undefined>

  onSubmit(values: NewOrganizationInput): Promise<void>;
}

const OrganizationAddForm: React.FC<Props> = (props: Props) => {
  const {
    onSubmit,
    formikRef
  } = props;

  return (
    <Formik<NewOrganizationInput>
      initialValues={initialValues}
      validationSchema={AddOrganizationSchema}
      onSubmit={onSubmit}
      enableReinitialize

      // @ts-ignore due to invalid Formik typings
      innerRef={formikRef}
    >
      <View/>
    </Formik>
  );
};

export default OrganizationAddForm;
