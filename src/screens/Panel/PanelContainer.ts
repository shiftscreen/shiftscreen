import React from 'react';

import PanelView from './PanelView';
import { viewsConfig } from './PanelConfig';
import { View, ViewChange } from './PanelTypes';

const Panel: React.FC = () => {
  const [selectedView, setSelectedView] = React.useState<View>(viewsConfig[0]);
  const onViewChange: ViewChange = (index: number) => (
    setSelectedView(viewsConfig[index])
  );

  return PanelView({
    viewsConfig,
    onViewChange,
    selectedView
  })
};

export default Panel;
