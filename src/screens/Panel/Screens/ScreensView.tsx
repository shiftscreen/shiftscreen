import React from 'react';
import { Button, List } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { Card } from 'components/Screens';

const Screens: React.FC = () => (
  <List
    grid={{ gutter: 16, column: 4 }}
    dataSource={[1, 2, 3]}
    renderItem={item => (
      <List.Item>
        <Card />
      </List.Item>
    )}
  />
);

export const ScreensHeaderActions: React.FC = () => (
  <Button
    type="primary"
    size="large"
    icon={<PlusOutlined />}
  >
    Stwórz nowy
  </Button>
);

export default Screens;
