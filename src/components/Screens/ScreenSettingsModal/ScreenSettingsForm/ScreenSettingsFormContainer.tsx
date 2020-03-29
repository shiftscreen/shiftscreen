import React from 'react';
import { Formik, FormikProps } from 'formik';
import { UpdateScreenInput } from 'types';

import View from './ScreenAddFormView';
import { initialValues, AddScreenSchema } from './ScreenAddFormUtils';

interface Props {
  formikRef: React.Ref<FormikProps<UpdateScreenInput> | undefined>
  onSubmit(values: UpdateScreenInput): Promise<void>;
}

const ScreenAddForm: React.FC<Props> = (props: Props) => {
  const {
    onSubmit,
    formikRef
  } = props;

  return (
    <Formik<UpdateScreenInput>
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
