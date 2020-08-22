import React from 'react';
import { Button, Dropdown, Menu } from 'antd';
import { DownOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { ErrorAlert } from 'shared';

import { BasicUserPartsFragment, useViewerQuery } from 'generated/graphql';
import { UserEditModal } from 'components/Auth';
import { auth } from 'utils';

const UserInfo: React.FC = () => {
  const { loading, error, data } = useViewerQuery();

  if (loading) return null;

  if (error || !data) return (
    <ErrorAlert error={error}/>
  );

  const viewer = data.viewer;

  const menu = (
    <Menu>
      <ProfileAction user={viewer}/>
      <LogoutAction/>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} placement="bottomRight">
      <Button size="large">
        {viewer.firstName} {viewer.lastName} <DownOutlined/>
      </Button>
    </Dropdown>
  );
};

const LogoutAction: React.FC = (props) => {
  const handleLogout = () => auth.logout();

  return (
    <Menu.Item {...props} onClick={handleLogout}>
      <LogoutOutlined/> Wyloguj
    </Menu.Item>
  )
};

const ProfileAction: React.FC<{ user: BasicUserPartsFragment }> = ({ user, ...props }) => {
  const [visible, setVisible] = React.useState<boolean>(false);

  const handleClick = (): void => (
    setVisible(true)
  );

  const handleCreate = async (values: any) => {
    setVisible(false);
  };

  const handleClose = () => (
    setVisible(false)
  );

  return (
    <>
      <Menu.Item {...props} onClick={handleClick}>
        <UserOutlined/> Profil
      </Menu.Item>
      <UserEditModal
        user={user}
        visible={visible}
        onClose={handleClose}
        onCreate={handleCreate}
      />
    </>
  )
};

export default UserInfo;
