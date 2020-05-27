import React from 'react';
import { Col } from 'antd';

import { Container, Inner } from './PanelHeaderStyle';

import UserInfo from './UserInfo';

const PanelHeader: React.FC = () => {

  return (
    <Container>
      <Inner
        align="middle"
        justify="end"
      >
        <Col>
          <UserInfo/>
        </Col>
      </Inner>
    </Container>
  );
};

export default PanelHeader;
