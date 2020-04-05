import React from 'react';
import { Row, Col } from 'antd';

import { Storage, List } from 'components/Files';

const Files: React.FC = () => (
  <Row gutter={[24, 24]}>
    <Col span="6">
      <Storage />
    </Col>
    <Col span="18">
      <List />
    </Col>
  </Row>
);

export default Files;
