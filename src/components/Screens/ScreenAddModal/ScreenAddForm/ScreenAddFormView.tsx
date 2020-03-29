import React from 'react';
import { Form, Input } from 'formik-antd';

const ScreenAddForm: React.FC = () => (
  <Form>
    <Form.Item name="title">
      <Input name="title" placeholder="Tytuł wyświetlacza" />
    </Form.Item>
  </Form>
);

export default ScreenAddForm;
