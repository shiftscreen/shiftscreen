import React from 'react';
import { Formik, FormikProps } from 'formik';
import { BasicSlidePartsFragment } from 'types';

import { SlideAdvancedInput } from '../SlideAdvancedModalTypes';
import View from './FormView';

interface Props {
  formikRef: React.Ref<FormikProps<SlideAdvancedInput> | undefined>
  onSubmit(values: SlideAdvancedInput): Promise<void>;
  slide: BasicSlidePartsFragment;
}

const SlideAdvancedForm: React.FC<Props> = (props: Props) => {
  const {
    onSubmit,
    formikRef,
    slide,
  } = props;

  const { time, date, weekdays } = slide;
  const initialValues: SlideAdvancedInput = {
    time,
    date,
    weekdays,
  };

  return (
    <Formik<SlideAdvancedInput>
      initialValues={initialValues}
      onSubmit={onSubmit}
      children={View}
      enableReinitialize

      // @ts-ignore due to invalid Formik typings
      innerRef={formikRef}
    />
  );
};

export default SlideAdvancedForm;
