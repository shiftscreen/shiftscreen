import React from 'react';
import { Tabs } from 'antd';

import { LoginForm, SignUpForm } from 'components/Auth';
import { Logo } from 'shared';
import { Container, Inner, LogoWrapper, Overlay, Image } from './AuthStyle';

const { TabPane } = Tabs;

const Auth: React.FC = () => {
  return (
    <Container>
      <Image src="images/boardroom.jpg" alt="boardroom"/>
      <Overlay/>
      <Inner>
        <LogoWrapper>
          <Logo color="full"/>
        </LogoWrapper>
        <Tabs
          defaultActiveKey="login"
          tabBarGutter={50}
          size="large"
        >
          <TabPane tab="Logowanie" key="login">
            <LoginForm/>
          </TabPane>
          <TabPane tab="Rejestracja" key="sign-up">
            <SignUpForm/>
          </TabPane>
        </Tabs>
      </Inner>
    </Container>
  );
};

export default Auth;
