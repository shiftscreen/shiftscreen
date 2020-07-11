import React from 'react';
import { Divider } from 'antd';
import { Form, Input, Slider } from 'formik-antd';
import { ModuleConfigProps } from 'types';
import { ColorInput, MediaInput } from 'shared';

const Config: React.FC<ModuleConfigProps> = ({ submitForm }: ModuleConfigProps) => {

  return (
    <>
      <Form.Item
        name="name"
        label="Nazwa"
      >
        <Input name="name" />
      </Form.Item>
      <Form.Item
        name="text.highlightedColor"
        label="Kolor tekstu"
      >
        <ColorInput
          name="text.highlightedColor"
          onAfterChange={submitForm}
        />
      </Form.Item>
      <Divider/>
      <Form.Item
        name="border.width"
        label="Szerokość ramki"
      >
        <Slider
          min={0}
          max={64}
          step={4}
          onAfterChange={submitForm}
          name="border.width"
        />
      </Form.Item>
      <Form.Item
        name="border.color"
        label="Kolor ramki"
      >
        <ColorInput
          name="border.color"
          onAfterChange={submitForm}
        />
      </Form.Item>
      <Divider/>
      <Form.Item
        name="image"
        label="Logo"
      >
        <MediaInput
          name="image"
          onAfterChange={submitForm}
        />
      </Form.Item>
    </>
  )
};

export default React.memo(Config);
