import React from 'react';
import { PanelTypes } from 'types';

import {
  Container,
  LogoWrapper,
  Logo
} from './PanelSiderStyle';

import Menu from '../PanelMenu';

interface Props {
  viewsConfig: PanelTypes.ViewsConfig;
  onViewChange: PanelTypes.ViewChange;
}

const PanelSider: React.FC<Props> = ({ viewsConfig, onViewChange }: Props) => (
  <Container>
    <LogoWrapper>
      <Logo color="white"/>
    </LogoWrapper>
    <Menu viewsConfig={viewsConfig} onViewChange={onViewChange}/>
  </Container>
);

export default PanelSider;
