import React from 'react';
import { Form, Input } from 'formik-antd';

const SignInForm: React.FC = () => (
  <Form name="sign-in-form">
    <Form.Item name="email">
      <Input name="email" type="email" placeholder="Email" />
    </Form.Item>
    <Form.Item name="password">
      <Input name="email" type="password" placeholder="Hasło" />
    </Form.Item>
    <Form.Item name="firstName">
      <Input name="firstName" type="text" placeholder="Imię" />
    </Form.Item>
    <Form.Item name="lastName">
      <Input name="lastName" type="text" placeholder="Nazwisko" />
    </Form.Item>
  </Form>
);

export default SignInForm;
