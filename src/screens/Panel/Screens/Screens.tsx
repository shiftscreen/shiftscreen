import React from 'react';
import { List, Card as AntdCard } from 'antd';

import { Screen } from 'types';
import { Card } from 'components/Screens';
import { ListGridType } from 'antd/es/list';

const mockupData: Screen[] = [
  {
    id: "1",
    createdAt: "2020-03-03T21:10:16.270Z",
    updatedAt: "2020-03-03T21:10:16.270Z",
    title: "Jeden",
    isActive: true
  },
  {
    id: "2",
    createdAt: "2020-03-03T21:10:16.270Z",
    updatedAt: "2020-03-03T21:10:16.270Z",
    title: "Dwa",
    isActive: true
  },
  {
    id: "3",
    createdAt: "2020-03-03T21:10:16.270Z",
    updatedAt: "2020-03-03T21:10:16.270Z",
    title: "Trzy",
    isActive: false
  }
];

const Screens: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(true);

  setTimeout(() => setLoading(false), 500);

  const grid: ListGridType = {
    gutter: 16,
    lg: 3,
    xl: 4,
  };

  const skeleton = (
    <List
      grid={grid}
      dataSource={[1, 2]}
      renderItem={(number) => (
        <List.Item key={number}>
          <AntdCard loading />
        </List.Item>
      )}
    />
  );

  const list = (
    <List<Screen>
      grid={grid}
      dataSource={mockupData}
      renderItem={(screen: Screen) => (
        <List.Item key={screen.id}>
          <Card screen={screen} />
        </List.Item>
      )}
    />
  );

  return loading ? skeleton : list;
};

export default Screens;
