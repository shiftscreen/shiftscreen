import React from 'react';
import { List, Card as AntdCard, Alert } from 'antd';
import { ListGridType } from 'antd/es/list';

import { Role } from 'types';
import { Card } from 'components/Screens';
import { useViewerRolesQuery } from 'generated/graphql';

const ScreensContainer: React.FC = () => {
  const { data, loading, error } = useViewerRolesQuery();
  const roles: Role[] = data?.viewer?.roles || [];

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
    console.error(error);
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
      dataSource={roles}
      renderItem={(role: Role) => (
        <List.Item key={role.id}>
          <Card role={role} />
        </List.Item>
      )}
    />
  );
};

export default ScreensContainer;
