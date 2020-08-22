import React from 'react';
import { PanelTypes } from 'types';

import { Container, Logo, LogoWrapper } from './PanelSiderStyle';

import Menu from '../PanelMenu';

interface Props {
  viewsConfig: PanelTypes.ViewsConfig;
}

const PanelSider: React.FC<Props> = ({ viewsConfig }: Props) => (
  <Container>
    <LogoWrapper>
      <Logo color="full"/>
    </LogoWrapper>
    <Menu viewsConfig={viewsConfig}/>
  </Container>
);

export default PanelSider;
