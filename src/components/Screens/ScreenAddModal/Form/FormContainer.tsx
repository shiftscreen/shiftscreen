import React from 'react';
import { Formik, FormikProps } from 'formik';
import { NewScreenInput, Organization } from 'types';
import { blue } from '@ant-design/colors';

import View from './FormView';
import { AddScreenSchema } from './FormUtils';

interface Props {
  formikRef: React.Ref<FormikProps<NewScreenInput> | undefined>

  onSubmit(values: NewScreenInput): Promise<void>;

  organization: Organization;
}

const ScreenAddForm: React.FC<Props> = ({ onSubmit, formikRef, organization }: Props) => {
  const initialValues: NewScreenInput = {
    title: '',
    color: blue[5],
    ratio: '16:9',
    organizationId: parseInt(organization.id, 10),
  };

  return (
    <Formik<NewScreenInput>
      initialValues={initialValues}
      validationSchema={AddScreenSchema}
      onSubmit={onSubmit}

      // @ts-ignore due to invalid Formik typings
      innerRef={formikRef}
    >
      <View/>
    </Formik>
  );
};

export default ScreenAddForm;
