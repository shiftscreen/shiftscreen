import React from 'react';
import { Badge, Menu, Dropdown, Typography } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

import {
  Image,
  Title,
  Card
} from './ScreenCardStyle';

const { Meta } = Card;
const { Text } = Typography;

const MoreMenu = (
  <Menu>
    <Menu.Item>
      Dezaktywuj
    </Menu.Item>
    <Menu.Item>
      <Text type="danger">Usuń</Text>
    </Menu.Item>
  </Menu>
);

const MoreAction: React.FC = () => (
  <Dropdown overlay={MoreMenu}>
    <EllipsisOutlined key="ellipsis" />
  </Dropdown>
);

const ScreenCard: React.FC = () => (
  <Card
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <MoreAction/>,
    ]}
  >
    <Meta
      avatar={
        <Image src="https://i.imgur.com/wDfxXP5.png" shape="square"/>
      }
      title={<Title>Nowy ekran</Title>}
      description={<Badge status="success" text="Aktywny" />}
    />
  </Card>
);

export default ScreenCard;
