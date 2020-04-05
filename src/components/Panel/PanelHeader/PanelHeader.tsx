import React from 'react';
import { Col } from 'antd';

import { Container, Inner } from './PanelHeaderStyle';

import Search from './Search';
import UserInfo from './UserInfo';

const PanelHeader: React.FC = () => {

  return (
    <Container>
      <Inner
        align="middle"
        justify="space-between"
      >
        <Col span={8}>
          <Search/>
        </Col>
        <Col>
          <UserInfo/>
        </Col>
      </Inner>
    </Container>
  );
};

export default PanelHeader;
