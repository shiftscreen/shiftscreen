import React from 'react';
import * as R from 'ramda';
import { Dropdown, Menu, Typography, Modal, Button, Tooltip } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons';

import { Role, PermissionType, Screen } from 'types';
import { deactivateScreen, activateScreen, deleteScreen } from './CardActionsOperations';

const { Text } = Typography;
const { confirm } = Modal;

interface Props {
  screen: Screen;
}

const CardActions = (role: Role): JSX.Element[] => {
  const { screen } = role;
  const isAdmin = role.permissionType === PermissionType.Admin;

  if (screen === undefined) return [];

  const editorActions = [
    <Edit key="edit" screen={screen} />,
  ];

  const adminActions = [
    <Edit key="edit" screen={screen} />,
    <MoreActions key="more" screen={screen} />,
  ];

  return isAdmin ? adminActions : editorActions;
};

const Edit: React.FC<Props> = (props: Props) => {
  const handleClick = () => null;

  return (
    <Tooltip title="Tryb projektanta">
      <Button type="link" onClick={handleClick}>
        <EditOutlined />
      </Button>
    </Tooltip>
  )
};

const MoreActions: React.FC<Props> = (props: Props) => {
  const { screen } = props;

  const toggleActivation = () => (
    R.ifElse(
      R.equals(R.T()),
      () => deactivateScreen(screen),
      () => activateScreen(screen)
    )(screen.isActive)
  );

  const handleDeleteClick = () => confirm({
    title: 'Czy na pewno chcesz usunąć ten wyświetlacz?',
    icon: <ExclamationCircleOutlined />,
    content: `Wszystkie dane powiązane z wyświetlaczem "${screen.title}" zostaną bezpowrotnie usunięte. Tej akcji nie da się cofnąć.`,
    okText: 'Usuń',
    okType: 'danger',
    cancelText: 'Anuluj',
    onOk: () => deleteScreen(screen),
  });

  const MoreMenu = (
    <Menu>
      <Menu.Item onClick={toggleActivation}>
        {screen.isActive ? 'Dezaktywuj' : 'Aktywuj'}
      </Menu.Item>
      <Menu.Item onClick={handleDeleteClick}>
        <Text type="danger">Usuń</Text>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={MoreMenu} trigger={['click']}>
      <Button type="link">
        <EllipsisOutlined key="ellipsis" />
      </Button>
    </Dropdown>
  );
};

export default CardActions;
