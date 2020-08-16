import React from 'react';
import { ModuleConfigProps } from 'types';
import { Alert, Divider } from 'antd';
import { Form } from 'formik-antd';
import ListInputView from './ListInput';

const Config: React.FC<ModuleConfigProps> = ({ submitForm }) => {
  return (
    <>
      <Alert
        type="info"
        message="Przy każdym pokazaniu slajdu wyświetlony zostanie jeden losowy obrazek"
      />
      <Divider/>
      <Form.Item
        name="photosList"
        label="Lista obrazków"
      >
        <ListInputView
          onAfterChange={submitForm}
          fieldName="photosList"
        />
      </Form.Item>
    </>
  );
};

export default React.memo(Config);
