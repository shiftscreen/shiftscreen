import React from 'react';
import {Formik, FormikProps} from 'formik';
import { NewScreenInput } from 'types';

import View from './ScreenAddFormView';
import { initialValues, AddScreenSchema } from './ScreenAddFormUtils';

interface Props {
  formikRef: React.MutableRefObject<FormikProps<NewScreenInput> | undefined>
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
      render={() => <View />}

      // @ts-ignore invalid Formik typings
      innerRef={formikRef}
    />
  )
};

export default ScreenAddForm;
