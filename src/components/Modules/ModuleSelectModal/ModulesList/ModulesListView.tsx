import React from 'react';
import * as R from 'ramda';

import modules from 'modules';
import { List, ListElement } from './ModulesListStyle';
import { Card as ModuleCard } from 'components/Modules';
import { Module } from 'types';

interface Props {
  onClick(module: Module): void;
}

const ModulesList: React.FC<Props> = ({ onClick }: Props) => {
  const toElement = (module: Module) => (
    <ListElement key={module.id}>
      <ModuleCard
        module={module}
        onClick={onClick}
        disableLink
      />
    </ListElement>
  );
  const elementsList = R.map(toElement, modules);

  return (
    <List>
      {elementsList}
    </List>
  );
};

export default ModulesList;
