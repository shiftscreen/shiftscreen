import React from 'react';
import * as R from 'ramda';
import { PanelTypes, Path } from 'types';

import MenuItem from './MenuItem';
import { generatePath } from 'react-router';

interface Props {
  viewsConfig: PanelTypes.ViewsConfig;
}

export const ItemsList: React.FC<Props> = (props: Props) => {
  const { viewsConfig } = props;
  const isNotHidden = (element: PanelTypes.View) => R.not(element.hideInMenu);
  const itemsList = R.filter(isNotHidden, viewsConfig);

  const getLink = (element: string) => (
    generatePath(Path.PanelElement, { element })
  );

  const item = (view: PanelTypes.View): React.ReactElement => (
    <MenuItem
      key={view.index}
      iconname={view.iconName}
      title={view.title}
      to={getLink(view.elementPathName)}
    />
  );

  const list = R.map(item, itemsList);

  return <>{list}</>;
};
