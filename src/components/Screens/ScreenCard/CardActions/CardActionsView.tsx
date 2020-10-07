import React from 'react';
import { useDeleteScreenMutation, useNotifyScreenUpdatedMutation, useUpdateScreenMutation } from 'generated/graphql';
import { MenuItemProps } from 'antd/lib/menu/MenuItem';
import { Button, Dropdown, Menu, Modal, Typography } from 'antd';
import { red } from '@ant-design/colors';
import { DeleteOutlined, MoreOutlined, PoweroffOutlined } from '@ant-design/icons';
import { ScreenTypes } from 'types';
import { DataProxy } from 'apollo-cache';
import { updateCacheAfterScreenDelete } from './CardActionsUtils';
import { handleError } from 'utils';

const { confirm } = Modal;
const { Text } = Typography;

interface Props {
  screen: ScreenTypes.ScreenViewerRole;
}

const CardActions: React.FC<Props> = ({ screen }) => {
  const menu = (
    <Menu>
      <ToggleActivationItem screen={screen}/>
      <Menu.Divider/>
      <DeleteItem screen={screen}/>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <Button>
        <MoreOutlined/>
      </Button>
    </Dropdown>
  );
};

type ItemProps = MenuItemProps & Props;

const ToggleActivationItem: React.FC<ItemProps> = ({ screen, ...props }: ItemProps) => {
  const { id, isActive } = screen;
  const [notifyScreenUpdated] = useNotifyScreenUpdatedMutation({
    variables: { id: parseInt(screen.id, 10) }
  });
  const [updateScreen] = useUpdateScreenMutation({
    onError: (error) => (
      handleError(error, 'Wystąpił błąd przy aktualizowaniu ekranu')
    ),
    onCompleted: () => (
      notifyScreenUpdated()
    ),
    variables: {
      id: parseInt(id, 10),
      values: {
        isActive: !isActive,
      }
    }
  });

  const handleClick = async () => {
    try {
      await updateScreen();
    } catch (e) {
      handleError(e);
    }
  };

  const text = isActive ? 'Dezaktywuj' : 'Aktywuj';

  return (
    <Menu.Item
      {...props}
      key="toggle-active"
      onClick={handleClick}
    >
      <PoweroffOutlined/> {text}
    </Menu.Item>
  );
};

const DeleteItem: React.FC<ItemProps> = ({ screen, ...props }: ItemProps) => {
  const { id } = screen;
  const [deleteScreen] = useDeleteScreenMutation({
    update: (cache: DataProxy) => updateCacheAfterScreenDelete(cache, screen),
    variables: {
      id: parseInt(id, 10),
    },
  });

  const handleOk = async () => {
    try {
      await deleteScreen();
    } catch (e) {
      handleError(e);
    }
  };

  const confirmTitle = (
    <>
      Czy na pewno chcesz usunąć ekran&nbsp;
      <Text strong>{screen.title}</Text>
      ?
    </>
  );

  const handleClick = () => (
    confirm({
      title: confirmTitle,
      icon: <DeleteOutlined/>,
      content: 'Tej czynności nie można cofnąć',
      okText: 'Usuń',
      okType: 'danger',
      cancelText: 'Nie',
      onOk: handleOk,
    })
  );

  return (
    <Menu.Item
      {...props}
      key="delete"
      onClick={handleClick}
      style={{ color: red.primary }}
    >
      <DeleteOutlined/> Usuń
    </Menu.Item>
  );
};

export default CardActions;
