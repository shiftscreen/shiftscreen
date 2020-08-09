import React from 'react';
import { Form, Input } from 'formik-antd';
import { ModuleConfigProps } from 'types';

const Config: React.FC<ModuleConfigProps> = () => (
  <>
    <Form.Item
      name="url"
      label="URL"
    >
      <Input name="url" />
    </Form.Item>
  </>
);

export default React.memo(Config);
