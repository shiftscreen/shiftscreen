import React from 'react';
import * as R from 'ramda';
import { useParams } from 'react-router';

import PanelView from './PanelView';
import { viewsConfig } from './PanelConfig';
import { View } from './PanelTypes';

const Panel: React.FC = () => {
  const { element } = useParams();

  const getViewByMatch = (): View => {
    const matchedView = R.find<View>(
      R.propEq('elementPathName', element)
    )(viewsConfig);

    if (matchedView !== undefined) {
      return matchedView;
    } else {
      return viewsConfig[0];
    }
  };

  const initialValue = getViewByMatch();
  const [selectedView, setSelectedView] = React.useState<View>(initialValue);

  React.useEffect(() => (
    setSelectedView(getViewByMatch)
  ), [element]);

  return (
    <PanelView
      viewsConfig={viewsConfig}
      selectedView={selectedView}
    />
  )
};

export default Panel;
