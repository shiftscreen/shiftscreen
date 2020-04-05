import React from 'react';
import { generatePath, Link } from 'react-router-dom';
import { Button } from 'antd';
import { Path } from 'types';

import Logo from 'components/Logo';
import { Container, Inner, LogoWrapper } from './HomeStyle';

const Home: React.FC = () => {
  const authPath = generatePath(Path.Auth);

  return (
    <Container>
      <Inner>
        <LogoWrapper>
          <Logo color="full"/>
        </LogoWrapper>
        <Link to={authPath}>
          <Button type="primary" size="large">
            Zaloguj się
          </Button>
        </Link>
      </Inner>
    </Container>
  );
};

export default Home;
