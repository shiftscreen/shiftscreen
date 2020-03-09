import React from 'react';
import { PanelTypes } from 'types';

import { Container } from './PanelMenuStyle';
import { ItemsList } from './PanelMenuUtils';

interface Props {
  viewsConfig: PanelTypes.ViewsConfig;
  onViewChange: PanelTypes.ViewChange;
}

const PanelMenu: React.FC<Props> = (props: Props) => {
  const { viewsConfig, onViewChange } = props;

  return (
    <Container>
      <ItemsList
        viewsConfig={viewsConfig}
        onViewChange={onViewChange}
      />
    </Container>
  );
};

export default PanelMenu;
