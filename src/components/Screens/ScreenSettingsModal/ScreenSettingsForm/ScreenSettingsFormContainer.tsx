import React from 'react';
import { Formik, FormikProps } from 'formik';
import { Screen, UpdateScreenInput } from 'types';

import View from './ScreenSettingsFormView';
import { UpdateScreenSchema } from './ScreenSettingsFormUtils';

interface Props {
  screen: Screen;
  formikRef: React.Ref<FormikProps<UpdateScreenInput> | undefined>
  onSubmit(values: UpdateScreenInput): Promise<void>;
}

const ScreenSettingsForm: React.FC<Props> = (props: Props) => {
  const {
    screen,
    onSubmit,
    formikRef
  } = props;

  const initialValues: UpdateScreenInput = {
    title: screen.title
  };

  return (
    <Formik<UpdateScreenInput>
      initialValues={initialValues}
      validationSchema={UpdateScreenSchema}
      onSubmit={onSubmit}

      // @ts-ignore due to invalid Formik typings
      innerRef={formikRef}
    >
      <View />
    </Formik>
  )
};

export default ScreenSettingsForm;
