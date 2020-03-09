import React from 'react';
import * as R from 'ramda';
import { PanelTypes } from 'types';

import MenuItem from './MenuItem';

interface ItemsListProps {
  viewsConfig: PanelTypes.ViewsConfig;
  onViewChange: PanelTypes.ViewChange;
}

export const ItemsList: React.FC<ItemsListProps> = (props: ItemsListProps) => {
  const { viewsConfig, onViewChange } = props;

  const item = (view: PanelTypes.View): React.ReactElement => (
    <MenuItem
      key={view.index}
      iconname={view.iconName}
      title={view.title}
      to={view.path}
      onClick={() => onViewChange(view.index)}
    />
  );

  const list = R.map(item, viewsConfig);

  return <>{list}</>;
};
