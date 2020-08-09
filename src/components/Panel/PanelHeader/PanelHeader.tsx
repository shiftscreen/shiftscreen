import React from 'react';
import { Col } from 'antd';

import { UserInfo } from 'components/Auth';
import { Container, Inner } from './PanelHeaderStyle';

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
