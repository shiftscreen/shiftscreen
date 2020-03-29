import React from 'react';
import { Form, Input } from 'formik-antd';

const ScreenAddForm: React.FC = () => (
  <Form name="screen-add-form">
    <Form.Item name="title">
      <Input name="title" placeholder="Tytuł wyświetlacza" />
    </Form.Item>
  </Form>
);

export default ScreenAddForm;
