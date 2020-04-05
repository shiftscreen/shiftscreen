import React from 'react';
import * as R from 'ramda';
import { withRouter, RouteComponentProps } from 'react-router';

import PanelView from './PanelView';
import { viewsConfig } from './PanelConfig';
import { View } from './PanelTypes';

interface PathParams {
  element: string
}

type Props = RouteComponentProps<PathParams>;

const Panel: React.FC<Props> = (props: Props) => {
  const { match } = props;
  const getViewByMatch = (): View => {
    const matchedView = R.find<View>(
      R.propEq('elementPathName', match.params.element)
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
  ), [match]);

  return PanelView({
    viewsConfig,
    selectedView
  })
};

export default withRouter(Panel);
