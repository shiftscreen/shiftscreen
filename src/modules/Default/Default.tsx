import React from 'react';
import { Logo } from 'shared';

import { Container, LogoWrapper } from './DefaultStyle';

const Default: React.FC = () => (
  <Container>
    <LogoWrapper>
      <Logo color="white"/>
    </LogoWrapper>
  </Container>
);

export default Default;
