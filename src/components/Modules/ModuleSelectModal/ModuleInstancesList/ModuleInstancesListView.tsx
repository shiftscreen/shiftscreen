import React from 'react';
import * as R from 'ramda';
import { ListGridType } from 'antd/es/list';
import { Card as AntdCard, List as AntdList } from 'antd';

import { Container, List, ListElement } from './ModuleInstancesListStyle';
import {
  InstanceCard as ModuleInstanceCard,
  InstanceAddCard as ModuleInstanceAddCard,
} from 'components/Modules';
import { BasicAppInstancePartsFragment, Module, useAppInstancesByAppIdQuery } from 'types';
import { ErrorAlert } from 'shared';

interface Props {
  module: Module;
  onClick(instance: BasicAppInstancePartsFragment): void;
}

const ModuleInstancesList: React.FC<Props> = ({ module, onClick }: Props) => {
  const { data, loading, error } = useAppInstancesByAppIdQuery({
    variables: { appId: module.id }
  });
  const moduleInstances = data?.appInstancesByAppId || [];

  const grid: ListGridType = {
    gutter: 16,
    column: 3,
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

  const toElement = (instance: BasicAppInstancePartsFragment) => (
    <ListElement key={instance.id}>
      <ModuleInstanceCard
        instance={instance}
        onClick={onClick}
        hideActions
        clickable
      />
    </ListElement>
  );
  const elementsList = R.map(toElement, moduleInstances);

  return (
    <Container>
      <ModuleInstanceAddCard
        module={module}
        onCreate={onClick}
      />
      <List>
        {elementsList}
      </List>
    </Container>
  );
};

export default ModuleInstancesList;
