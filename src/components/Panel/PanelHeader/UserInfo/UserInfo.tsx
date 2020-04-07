import React from 'react';
import { Row, Col, Menu, Dropdown, Avatar, Button } from 'antd';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Alert } from 'antd';

import { Container, CaretDownIcon } from './UserInfoStyle';
import { logout } from './UserInfoOperations';
import { useViewerQuery } from 'generated/graphql';

const UserInfo: React.FC = () => {
  const { loading, error, data } = useViewerQuery();

  const handleLogout = () => logout();

  const menu = (
    <Menu>
      <Menu.Item>
        <UserOutlined /> Profil
      </Menu.Item>
      <Menu.Item onClick={handleLogout}>
        <LogoutOutlined /> Wyloguj
      </Menu.Item>
    </Menu>
  );

  if (loading) return null;

  if (error || !data) return (
    <Alert
      message="Wystąpił błąd"
      type="error"
      showIcon
    />
  );

  const viewer = data.viewer;
  return (
    <Dropdown overlay={menu} placement="bottomRight">
      <Container>
        <Row align="middle" gutter={14}>
          <Col>
            <Avatar shape="square" icon={<UserOutlined />} />
          </Col>
          <Col>
            {viewer.firstName} {viewer.lastName} <CaretDownIcon />
          </Col>
        </Row>
      </Container>
    </Dropdown>
  )
};

export default UserInfo;
