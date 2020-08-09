import React from 'react';
import { Form, Input } from 'formik-antd';
import { Col, Divider, Row } from 'antd';

const UserEditForm: React.FC = () => (
  <Form name="user-edit-form">
    <Row gutter={[24, 0]}>
      <Col span={12}>
        <Form.Item name="firstName">
          <Input name="firstName" type="text" placeholder="Imię"/>
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item name="lastName">
          <Input name="lastName" type="text" placeholder="Nazwisko"/>
        </Form.Item>
      </Col>
    </Row>
    <Form.Item name="email">
      <Input name="email" type="email" placeholder="E-mail"/>
    </Form.Item>
    <Divider/>
    <Form.Item name="oldPassword">
      <Input.Password name="oldPassword" type="password" placeholder="Stare hasło"/>
    </Form.Item>
    <Form.Item name="password">
      <Input.Password name="password" type="password" placeholder="Nowe hasło"/>
    </Form.Item>
  </Form>
);

export default UserEditForm;
