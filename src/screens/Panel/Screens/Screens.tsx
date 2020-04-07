import React from 'react';
import { List, Card as AntdCard, Alert } from 'antd';
import { ListGridType } from 'antd/es/list';
import { useQuery } from '@apollo/react-hooks';

import { Role } from 'types';
import { Card } from 'components/Screens';
import { VIEWER_ROLES } from './ScreensUtils';
import { ViewerRolesData } from './ScreensTypes';

const Screens: React.FC = () => {
  const { loading, data, error } = useQuery<ViewerRolesData>(VIEWER_ROLES);

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

  if (error || !data) {
    console.log(error);
    return (
      <Alert
        message="Wystąpił błąd"
        type="error"
        showIcon
      />
    );
  }

  return (
    <List<Role>
      grid={grid}
      dataSource={data.viewer.roles}
      renderItem={(role: Role) => (
        <List.Item key={role.id}>
          <Card role={role} />
        </List.Item>
      )}
    />
  );
};

export default Screens;
