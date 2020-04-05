import React from 'react';
import * as R from 'ramda';
import { PanelTypes } from 'types';

import MenuItem from './MenuItem';

interface Props {
  viewsConfig: PanelTypes.ViewsConfig;
}

export const ItemsList: React.FC<Props> = (props: Props) => {
  const { viewsConfig } = props;

  const item = (view: PanelTypes.View): React.ReactElement => (
    <MenuItem
      key={view.index}
      iconname={view.iconName}
      title={view.title}
      to={`/panel/${view.elementPathName}`}
    />
  );

  const list = R.map(item, viewsConfig);

  return <>{list}</>;
};
