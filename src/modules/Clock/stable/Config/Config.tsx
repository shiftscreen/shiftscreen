import React from 'react';
import { Checkbox, Form } from 'formik-antd';
import { ModuleConfigProps } from 'types';

const Config: React.FC<ModuleConfigProps> = () => (
  <>
    <Form.Item
      name="showDate"
      label="Pokaż datę"
    >
      <Checkbox name="showDate" />
    </Form.Item>
  </>
);

export default React.memo(Config);
