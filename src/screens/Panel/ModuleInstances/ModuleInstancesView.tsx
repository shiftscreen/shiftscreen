import React from 'react';
import { useParams } from 'react-router';
import { ListGridType } from 'antd/es/list';
import { Card as AntdCard, List as AntdList } from 'antd';
import * as R from 'ramda';

import { BasicAppInstancePartsFragment, useAppInstancesByAppIdQuery } from 'generated/graphql';
import { ErrorAlert } from 'shared';
import { InstanceCard as ModuleInstanceCard } from 'components/Modules';
import { List, ListElement } from './ModuleInstancesStyle';

const ModuleInstances: React.FC = () => {
  const { id = '' } = useParams();

  const { data, loading, error } = useAppInstancesByAppIdQuery({
    variables: { appId: id }
  });
  const moduleInstances = data?.appInstancesByAppId || [];

  const grid: ListGridType = {
    gutter: 16,
    lg: 3,
    xxl: 4,
  };

  if (loading) return (
    <AntdList
      grid={grid}
      dataSource={[1, 2, 3]}
      renderItem={(number) => (
        <AntdList.Item key={number}>
          <AntdCard loading/>
        </AntdList.Item>
      )}
    />
  );

  if (error) return (
    <ErrorAlert error={error}/>
  );

  const toModuleInstanceCard = (instance: BasicAppInstancePartsFragment) => (
    <ListElement>
      <ModuleInstanceCard instance={instance}/>
    </ListElement>
  );
  const moduleInstancesCardsList = R.map(toModuleInstanceCard, moduleInstances);

  return (
    <List>
      {moduleInstancesCardsList}
    </List>
  );
};

export default ModuleInstances;
