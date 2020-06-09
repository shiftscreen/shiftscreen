import React from 'react';

import Logo from 'components/Logo';
import { Container, LogoWrapper } from './HomeStyle';

const Home: React.FC = () => (
  <Container>
    <LogoWrapper>
      <Logo color="white"/>
    </LogoWrapper>
  </Container>
);

export default Home;
