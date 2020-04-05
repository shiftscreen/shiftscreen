import React from 'react';
import { Formik, FormikProps } from 'formik';
import { NewScreenInput } from 'types';

import View from './FormView';
import { initialValues, AddScreenSchema } from './FormUtils';

interface Props {
  formikRef: React.Ref<FormikProps<NewScreenInput> | undefined>
  onSubmit(values: NewScreenInput): Promise<void>;
}

const ScreenAddForm: React.FC<Props> = (props: Props) => {
  const {
    onSubmit,
    formikRef
  } = props;

  return (
    <Formik<NewScreenInput>
      initialValues={initialValues}
      validationSchema={AddScreenSchema}
      onSubmit={onSubmit}

      // @ts-ignore due to invalid Formik typings
      innerRef={formikRef}
    >
      <View />
    </Formik>
  )
};

export default ScreenAddForm;
