import React from 'react';
import { DatePicker, Form } from 'formik-antd';
import { Alert, TimePicker } from 'antd';
import { FormikBag, FormikProps } from 'formik';
import { SlideAdvancedInput } from '../SlideAdvancedModalTypes';

import WeekdaysInput from './WeekdaysInput';
import ListInput from './ListInput';

const { RangePicker: TimeRangePicker } = TimePicker;
const { RangePicker: DateRangePicker } = DatePicker;

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};

type Props = FormikBag<FormikProps<SlideAdvancedInput>, SlideAdvancedInput>;

const SlideAdvancedForm: React.FC<Props> = () => (
  <Form name="slide-advanced-form" {...layout}>
    <Alert
      style={{ marginBottom: '2rem' }}
      message="Po wybraniu ustawień, slajd będzie pokazywał się tylko i wyłącznie we wskazanym przez Ciebie czasie."
      type="info"
      showIcon
      closable
    />
    <Form.Item
      name="date"
      label="Wydziel dni"
    >
      <ListInput
        fieldName="date"
        RangePicker={DateRangePicker}
      />
    </Form.Item>
    <Form.Item
      name="time"
      label="Wydziel godziny"
    >
      <ListInput
        fieldName="time"
        RangePicker={TimeRangePicker}
      />
    </Form.Item>
    <Form.Item
      name="weekdays"
      label="Dni tygodnia"
    >
      <WeekdaysInput/>
    </Form.Item>
  </Form>
);



export default SlideAdvancedForm;
