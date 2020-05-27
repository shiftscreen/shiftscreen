import React from 'react';
import { List, Card as AntdCard, Alert } from 'antd';
import { ListGridType } from 'antd/es/list';
import { RolesTypes } from 'types';

import { useViewerRolesQuery } from 'generated/graphql';
import { ErrorAlert } from 'shared';
import { Card as OrganizationCard } from 'components/Organizations';

const OrganizationsList: React.FC = () => {
  const { data, loading, error } = useViewerRolesQuery();
  const roles: RolesTypes.RoleOrganization[] = data?.viewer?.roles || [];

  const grid: ListGridType = {
    gutter: 16,
    lg: 3,
    xxl: 4,
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
    <List<RolesTypes.RoleOrganization>
      grid={grid}
      dataSource={roles}
      size="large"
      renderItem={(role) => (
        <List.Item key={role.id}>
          <OrganizationCard role={role}/>
        </List.Item>
      )}
    />
  );
};

export default OrganizationsList;
