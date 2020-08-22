import React from 'react';
import { Card as AntdCard, List } from 'antd';
import { ListGridType } from 'antd/es/list';

import { ScreenTypes } from 'types';
import { useOrganizationScreensLazyQuery, useSelectedOrganizationQuery } from 'generated/graphql';
import { ErrorAlert } from 'shared';
import { Card } from 'components/Screens';

const ScreensContainer: React.FC = () => {
  const [getOrganizationScreens, { data, loading, error }] = useOrganizationScreensLazyQuery();
  const { data: selectedOrganization } = useSelectedOrganizationQuery();
  const screens = data?.organization?.screens || [];

  const grid: ListGridType = {
    gutter: 16,
    lg: 3,
    xl: 4,
    xxl: 4,
  };

  React.useEffect(() => {
    const organizationId = selectedOrganization?.selectedOrganization?.id;
    if (organizationId) {
      getOrganizationScreens({
        variables: {
          id: parseInt(organizationId, 10),
        }
      });
    }
  }, [selectedOrganization]);

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
    <List<ScreenTypes.ScreenViewerRole>
      grid={grid}
      dataSource={screens}
      renderItem={(screen: ScreenTypes.ScreenViewerRole) => (
        <List.Item key={screen.id}>
          <Card screen={screen}/>
        </List.Item>
      )}
    />
  );
};

export default ScreensContainer;
