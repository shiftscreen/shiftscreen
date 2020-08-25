import React from 'react';
import { DatePicker, Form, Input, Radio } from 'formik-antd';
import { ModuleConfigProps } from 'types';
import { useField } from 'formik';

const Config: React.FC<ModuleConfigProps> = ({ submitForm }) => {
  const [{ value: afterComplete }] = useField<string>({
    name: 'afterComplete',
  });
  const showMessageSelected = afterComplete === 'showMessage';

  return (
    <>
      <Form.Item
        name="label"
        label="Wydarzenie"
      >
        <Input name="label" />
      </Form.Item>
      <Form.Item
        name="date"
        label="Data"
      >
        <DatePicker
          name="date"
          onChange={submitForm}
          showTime
        />
      </Form.Item>
      <Form.Item
        name="afterComplete"
        label="Po zakończeniu"
      >
        <Radio.Group name="afterComplete">
          <Radio.Button value="hide">Ukryj</Radio.Button>
          <Radio.Button value="showMessage">Pokaż tekst</Radio.Button>
        </Radio.Group>
      </Form.Item>
      {showMessageSelected && (
        <Form.Item
          name="completionMessage"
          label="Komunikat"
        >
          <Input name="completionMessage" />
        </Form.Item>
      )}
    </>
  );
};

export default React.memo(Config);
