import React from 'react';
import { PanelTypes } from 'types';

import { Container } from './PanelMenuStyle';
import { ItemsList } from './PanelMenuUtils';

interface Props {
  viewsConfig: PanelTypes.ViewsConfig;
}

const PanelMenu: React.FC<Props> = (props: Props) => {
  const { viewsConfig } = props;

  return (
    <Container>
      <ItemsList viewsConfig={viewsConfig} />
    </Container>
  );
};

export default PanelMenu;
