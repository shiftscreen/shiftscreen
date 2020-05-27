import React from 'react';
import { List, Card as AntdCard, Alert } from 'antd';
import { ListGridType } from 'antd/es/list';

import { BasicScreenPartsFragment, Role, Screen } from 'types';
import { useOrganizationScreensLazyQuery } from 'generated/graphql';
import { ErrorAlert } from '../../../shared';
import ScreenCard from '../../../components/Screens/ScreenCard';

const ScreensContainer: React.FC = () => {
  const [getOrganizationScreens, { data, loading, error }] = useOrganizationScreensLazyQuery();
  const screens = data?.organization?.screens || [];

  const grid: ListGridType = {
    gutter: 16,
    lg: 3,
    xl: 4,
  };

  if (loading) return (
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

  if (error) return (
    <ErrorAlert error={error}/>
  );

  return (
    <List<BasicScreenPartsFragment>
      grid={grid}
      dataSource={screens}
      renderItem={(screen: BasicScreenPartsFragment) => (
        <List.Item key={screen.id}>
          <ScreenCard screen={screen}/>
        </List.Item>
      )}
    />
  );
};

export default ScreensContainer;
