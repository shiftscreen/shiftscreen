import React from 'react';
import { Form, Input, Select, Radio } from 'formik-antd';
import { purple, cyan, blue } from '@ant-design/colors';

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 },
};

const ScreenAddForm: React.FC = () => (
  <Form name="screen-add-form" {...layout}>
    <Form.Item name="title" label="Tytuł wyświetlacza">
      <Input name="title" placeholder="Główny korytarz" />
    </Form.Item>
    <Form.Item name="color" label="Format ekranu">
      <Select name="ratio" defaultValue="16:9">
        <Option value="16:9">Szeroki (16:9)</Option>
        <Option value="21:9">Bardzo szeroki (21:9)</Option>
        <Option value="4:3">Kwadratowy (4:3)</Option>
      </Select>
    </Form.Item>
    <Form.Item name="color" label="Kolor karty">
      <Radio.Group name="color">
        <Radio.Button
          style={{
            backgroundColor: blue[6],
            color: '#fff',
          }}
          value={blue[6]}
        >Niebieski</Radio.Button>
        <Radio.Button
          style={{
            backgroundColor: cyan[6],
            color: '#fff',
          }}
          value={cyan[6]}
        >Cyjan</Radio.Button>
        <Radio.Button
          style={{
            backgroundColor: purple[6],
            color: '#fff',
          }}
          value={purple[6]}
        >Fioletowy</Radio.Button>
      </Radio.Group>
    </Form.Item>
  </Form>
);

export default ScreenAddForm;
