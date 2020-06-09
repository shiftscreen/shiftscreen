import React from 'react';
import { Form, Input } from 'formik-antd';

const OrganizationAddForm: React.FC = () => (
  <Form name="organization-add-form">
    <Form.Item name="title">
      <Input name="title" placeholder="Tytuł organizacji"/>
    </Form.Item>
  </Form>
);

export default OrganizationAddForm;
