import React from 'react';
import { Checkbox, Form } from 'formik-antd';
import { ModuleConfigProps } from 'types';
import { MediaInput } from 'shared';

const Config: React.FC<ModuleConfigProps> = ({ submitForm }) => (
  <>
    <Form.Item
      name="file"
      label="Plik"
    >
      <MediaInput
        name="file"
        onAfterChange={submitForm}
      />
    </Form.Item>
  </>
);

export default React.memo(Config);
