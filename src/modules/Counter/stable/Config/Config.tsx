import React from 'react';
import { DatePicker, Form, Input } from 'formik-antd';
import { ModuleConfigProps } from 'types';

const Config: React.FC<ModuleConfigProps> = ({ submitForm }) => (
  <>
    <Form.Item
      name="label"
      label="Wydarzenie"
    >
      <Input name="label" />
    </Form.Item>
    <Form.Item
      name="date"
      label="Data"
    >
      <DatePicker
        name="date"
        onChange={submitForm}
        showTime
      />
    </Form.Item>
    <Form.Item
      name="completionMessage"
      label={<>Komunikat po<br/>zakończeniu</>}
    >
      <Input name="completionMessage" />
    </Form.Item>
  </>
);

export default React.memo(Config);
