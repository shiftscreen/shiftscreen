import React from 'react';
import { Form, Input, Select, Radio } from 'formik-antd';
import { purple, cyan, blue, magenta, volcano, red } from '@ant-design/colors';
import { ColorInput } from 'shared';

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 },
};

const colors = [blue[6], purple[6], cyan[6], magenta[6], volcano[6], red[8]];

const ScreenAddForm: React.FC = () => (
  <Form name="screen-add-form" {...layout}>
    <Form.Item name="title" label="Tytuł wyświetlacza">
      <Input name="title" placeholder="Główny korytarz"/>
    </Form.Item>
    <Form.Item name="ratio" label="Format ekranu">
      <Select name="ratio" defaultValue="16:9">
        <Option value="16:9">Szeroki (16:9)</Option>
        <Option value="21:9" disabled>Bardzo szeroki (21:9)</Option>
        <Option value="4:3" disabled>Kwadratowy (4:3)</Option>
      </Select>
    </Form.Item>
    <Form.Item name="color" label="Kolor karty">
      <ColorInput
        name="color"
        colors={colors}
      />
    </Form.Item>
  </Form>
);

export default ScreenAddForm;
