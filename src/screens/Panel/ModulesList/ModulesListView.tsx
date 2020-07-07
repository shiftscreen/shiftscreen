import React from 'react';
import { ListGridType } from 'antd/es/list';
import { List } from 'antd';

import { Module } from 'types';
import { Card as ModuleCard } from 'components/Modules';
import modules from 'modules';

const ModulesList: React.FC = () => {
  const grid: ListGridType = {
    gutter: 16,
    lg: 3,
    xxl: 4,
  };

  return (
    <List<Module>
      grid={grid}
      dataSource={modules}
      size="large"
      renderItem={(module) => (
        <List.Item key={module.id}>
          <ModuleCard module={module}/>
        </List.Item>
      )}
    />
  );
};

export default ModulesList;
