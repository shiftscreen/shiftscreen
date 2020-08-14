import React from 'react';
import { Checkbox, Form } from 'formik-antd';
import { ModuleConfigProps } from 'types';

const Config: React.FC<ModuleConfigProps> = () => (
  <>
    <Form.Item
      name="showHoliday"
      label="Pokaż święto"
    >
      <Checkbox name="showHoliday" />
    </Form.Item>
    <Form.Item
      name="showDayNames"
      label="Pokaż imieniny"
    >
      <Checkbox name="showDayNames" />
    </Form.Item>
  </>
);

export default React.memo(Config);
