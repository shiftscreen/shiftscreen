import React from 'react';
import { Card, Row, Col, Typography, Progress } from 'antd';
import { red, grey } from '@ant-design/colors';

const { Text } = Typography;

const FilesStorage: React.FC = () => (
  <Card
    title={<Text strong>Twoja przestrzeń</Text>}
    style={{ width: "300px" }}
  >
    <Row gutter={[16, 16]} align="middle" justify="space-between" style={{ margin: 0 }}>
      <Col>
        <div>
          <Text strong>Zajęta: </Text>
          <Text>100 MB</Text>
        </div>
        <div>
          <Text strong>Dostępna: </Text>
          <Text>1 GB</Text>
        </div>
      </Col>
      <Col>
        <Progress
          type="circle"
          percent={10}
          width={48}
          strokeColor={red[5]}
          trailColor={grey[2]}
          style={{ fontWeight: 600 }}
        />
      </Col>
    </Row>
  </Card>
);

export default FilesStorage;
