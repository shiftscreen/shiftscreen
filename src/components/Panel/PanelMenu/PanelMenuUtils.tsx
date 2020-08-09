import React from 'react';
import * as R from 'ramda';
import { PanelTypes } from 'types';

import MenuItem from './MenuItem';

interface Props {
  viewsConfig: PanelTypes.ViewsConfig;
}

export const ItemsList: React.FC<Props> = (props: Props) => {
  const { viewsConfig } = props;
  const isNotHidden = (element: PanelTypes.View) => R.not(element.hideInMenu);
  const itemsList = R.filter(isNotHidden, viewsConfig);

  const item = (view: PanelTypes.View): React.ReactElement => (
    <MenuItem
      key={view.index}
      iconname={view.iconName}
      title={view.title}
      element={view.elementPathName}
      selectedPath={view.selectedPath || ''}
    />
  );

  const list = R.map(item, itemsList);

  return <>{list}</>;
};
