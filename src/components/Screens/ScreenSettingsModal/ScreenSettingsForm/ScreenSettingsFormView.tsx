import React from 'react';
import { Form, Input } from 'formik-antd';

const ScreenSettingsForm: React.FC = () => (
  <Form
    name="screen-settings-form"
    layout="vertical"
  >
    <Form.Item
      name="title"
      label="Tytuł"
    >
      <Input name="title" />
    </Form.Item>
  </Form>
);

export default ScreenSettingsForm;
