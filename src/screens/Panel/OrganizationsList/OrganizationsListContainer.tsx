import React from 'react';
import { Card as AntdCard, List } from 'antd';
import { ListGridType } from 'antd/es/list';
import { RoleTypes } from 'types';

import { useViewerRolesQuery } from 'generated/graphql';
import { ErrorAlert } from 'shared';
import { Card as OrganizationCard } from 'components/Organizations';

const OrganizationsList: React.FC = () => {
  const { data, loading, error } = useViewerRolesQuery();
  const roles: RoleTypes.RoleOrganization[] = data?.viewer?.roles || [];

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
          <AntdCard loading/>
        </List.Item>
      )}
    />
  );

  if (error) return (
    <ErrorAlert error={error}/>
  );

  return (
    <List<RoleTypes.RoleOrganization>
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
