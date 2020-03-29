import React from 'react';
import { Menu, Dropdown, Avatar } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

const UserInfo: React.FC = () => {

  const menu = (
    <Menu>
      <Menu.Item>
        Profil
      </Menu.Item>
      <Menu.Item>
        Wyloguj
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <a>
        <Avatar size={64} icon={<UserOutlined />} /> Jan Kowalski <DownOutlined />
      </a>
    </Dropdown>
  )
};

export default UserInfo;
