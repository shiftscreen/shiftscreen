import React from 'react';
import { DeleteOutlined, EllipsisOutlined, SettingOutlined, UserDeleteOutlined } from '@ant-design/icons';
import { red } from '@ant-design/colors';
import { RolesTypes, PanelTypes, PermissionType } from 'types';
import { Dropdown, Menu, message, Modal } from 'antd';
import { Link } from 'react-router-dom';
import * as R from 'ramda';
import { DataProxy } from 'apollo-cache';

import { useDeleteOrganizationMutation, useDeleteRoleMutation, } from 'generated/graphql';
import { updateCache } from './CardActionsUtils';

const { confirm } = Modal;

interface Props {
  role: RolesTypes.RoleOrganization;
}

const CardActions = ({ role }: Props): JSX.Element[] => {
  const { permissionType } = role;
  const isAdmin = permissionType === PermissionType.Admin;

  const adminActions = [
    <SettingsAction role={role}/>,
  ];

  const defaultActions = [
    <MenuAction role={role}/>,
  ];

  return [
    ...(isAdmin ? adminActions : []),
    ...defaultActions,
  ];
};

const SettingsAction: React.FC<Props> = ({ role }: Props) => {
  const { organization } = role;
  const { id } = organization;
  const path = `/panel/${PanelTypes.PanelPath.OrganizationSettings}/${id}`;

  return (
    <Link key="settings" to={path}>
      <SettingOutlined/>
    </Link>
  );
};

const MenuAction: React.FC<Props> = ({ role }: Props) => {
  const { permissionType } = role;
  const isAdmin = R.equals(permissionType, PermissionType.Admin);
  const handleMenuClick = (e: any) => e.preventDefault();

  const menu = (
    <Menu>
      <MenuLeaveOrganization role={role}/>
      {isAdmin && (<Menu.Divider/>)}
      {isAdmin && (
        <MenuDeleteOrganization role={role}/>
      )}
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <a className="ant-dropdown-link" onClick={handleMenuClick}>
        <EllipsisOutlined/>
      </a>
    </Dropdown>
  );
};

const MenuLeaveOrganization: React.FC<Props> = ({ role, ...props }: Props) => {
  const { permissionType } = role;
  const isAdmin = R.equals(permissionType, PermissionType.Admin);

  const [deleteRole] = useDeleteRoleMutation({
    onCompleted: () => (
      message.success('Pomyślnie opuszczono organizację')
    ),
    onError: () => {
      message.error('Wystąpił błąd podczas opuszczania organizacji');

      if (isAdmin) {
        message.info('Organizacja musi posiadać minimum jednego administratora', 10);
      }
    },
    update: (cache: DataProxy) => updateCache(cache, role),
    variables: {
      id: parseInt(role.id, 10),
    }
  });

  const handleLeaveClick = () => (
    confirm({
      title: 'Czy na pewno chcesz opuścić tę organizację?',
      icon: <UserDeleteOutlined/>,
      content: 'Tej czynności nie można cofnąć',
      okText: 'Tak',
      cancelText: 'Nie',
      onOk: deleteRole,
    })
  );

  return (
    <Menu.Item
      {...props}
      key="leave"
      onClick={handleLeaveClick}
    >
      <UserDeleteOutlined/> Opuść
    </Menu.Item>
  );
};

const MenuDeleteOrganization: React.FC<Props> = ({ role, ...props }: Props) => {
  const { organization } = role;

  const [deleteOrganization] = useDeleteOrganizationMutation({
    onCompleted: () => (
      message.success('Pomyślnie usunięto organizację')
    ),
    onError: () => (
      message.error('Wystąpił błąd podczas usuwania organizacji')
    ),
    update: (cache: DataProxy) => updateCache(cache, role),
    variables: {
      id: parseInt(organization.id, 10),
    }
  });

  const handleDeleteOrganizationClick = () => (
    confirm({
      title: 'Czy na pewno chcesz trwale usunąć tę organizację?',
      icon: <DeleteOutlined/>,
      content: 'Tej czynności nie można cofnąć',
      okText: 'Tak',
      okType: 'danger',
      cancelText: 'Nie',
      onOk: deleteOrganization,
    })
  );

  return (
    <Menu.Item
      {...props}
      key="delete"
      style={{ color: red.primary }}
      onClick={handleDeleteOrganizationClick}
    >
      <DeleteOutlined/> Usuń
    </Menu.Item>
  );
};

export default CardActions;
