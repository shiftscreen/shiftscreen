import React from 'react';
import { Tag, Dropdown, Button, Menu } from 'antd';
import { green, red } from '@ant-design/colors';
import { MoreOutlined, PoweroffOutlined, DeleteOutlined } from '@ant-design/icons';
import * as R from 'ramda';
import { BasicScreenPartsFragment } from 'types';

import {
  Container,
  Inner,
  Title,
} from './ScreenCardStyle';

interface Props {
  screen: BasicScreenPartsFragment;
}

const ScreenCard: React.FC<Props> = ({ screen }: Props) => {
  const { title, isActive, color } = screen;

  const handleClick = () => {
    console.log('click')
  };

  return (
    <Container onClick={handleClick}>
      <Inner>
        <div>
          <IsActive isActive={isActive}/>
        </div>
        <div>
          <Title>
            {title}
          </Title>
          <ScreenActions screen={screen}/>
        </div>
      </Inner>
    </Container>
  );
};

const IsActive: React.FC<{ isActive: boolean }> = ({ isActive }) => (
  R.cond<boolean, React.ReactElement>([
    [R.T, R.always(<Tag color={green.primary}>Aktywny</Tag>)],
    [R.F, R.always(<Tag color={red.primary}>Nieaktywny</Tag>)],
  ])(isActive)
);

const ScreenActions: React.FC<Props> = ({ screen }) => {
  const { isActive } = screen;

  const handleMenuClick = (e: any) => console.log(e);

  const ToggleActivationItem = () => {
    const text = isActive ? 'Dezaktywuj' : 'Aktywuj';

    return (
      <Menu.Item key="toggle-active">
        <PoweroffOutlined /> {text}
      </Menu.Item>
    )
  };

  const DeleteItem = () => (
    <Menu.Item key="delete">
      <DeleteOutlined /> Usuń
    </Menu.Item>
  );

  const menu = (
    <Menu onClick={handleMenuClick}>
      <ToggleActivationItem/>
      <DeleteItem/>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <Button>
        <MoreOutlined />
      </Button>
    </Dropdown>
  );
};

export default ScreenCard;
