import React from 'react';
import { Row, Col, Typography, Menu, Dropdown, Avatar, Button } from 'antd';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';

import { Container, CaretDownIcon } from './UserInfoStyle';

const UserInfo: React.FC = () => {
  const menu = (
    <Menu>
      <Menu.Item>
        <UserOutlined /> Profil
      </Menu.Item>
      <Menu.Item>
        <LogoutOutlined /> Wyloguj
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} placement="bottomRight">
      <Container>
        <Row align="middle" gutter={14}>
          <Col>
            <Avatar shape="square" icon={<UserOutlined />} />
          </Col>
          <Col>
            Jan Kowalski <CaretDownIcon />
          </Col>
        </Row>
      </Container>
    </Dropdown>
  )
};

export default UserInfo;
