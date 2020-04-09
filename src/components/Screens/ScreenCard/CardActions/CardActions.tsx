import React from 'react';
import * as R from 'ramda';
import { Dropdown, Menu, Typography, Modal, Button, Tooltip } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined, ExclamationCircleOutlined } from '@ant-design/icons';

import { Role, PermissionType, Screen } from 'types';
import { deactivateScreen, activateScreen, deleteScreen } from './CardActionsOperations';
import { AddModal, SettingsModal } from 'components/Screens';

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
    <Settings key="settings" screen={screen} />,
    <Edit key="edit" screen={screen} />,
    <MoreActions key="more" screen={screen} />,
  ];

  return isAdmin ? adminActions : editorActions;
};

const Settings: React.FC<Props> = (props: Props) => {
  const [visible, setVisible] = React.useState<boolean>(false);
  const { screen } = props;

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
      <Tooltip title="Ustawienia wyświetlacza">
        <Button type="link" onClick={handleClick}>
          <SettingOutlined />
        </Button>
      </Tooltip>
      <SettingsModal
        screen={screen}
        visible={visible}
        onCreate={handleCreate}
        onClose={handleClose}
      />
    </>
  )
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
