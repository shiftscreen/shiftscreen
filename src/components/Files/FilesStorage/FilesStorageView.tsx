import React from 'react';
import { Typography, Progress } from 'antd';
import { Colors } from 'constants/index';

import {
  Card,
  Descriptions,
  ProgressWrapper
} from './FilesStorageStyle';

const { Text } = Typography;

const FilesStorage: React.FC = () => {
  const title = (
    <Text strong>Twoja przestrzeń</Text>
  );

  return (
    <Card title={title}>
      <Descriptions bordered>
        <Descriptions.Item label="Zajęto" span={3}>
          100 MB
        </Descriptions.Item>
        <Descriptions.Item label="Pozostało" span={3}>
          600 MB
        </Descriptions.Item>
      </Descriptions>
      <ProgressWrapper>
        <Progress percent={14} strokeColor={Colors.violet} />
      </ProgressWrapper>
    </Card>
  );
};

export default FilesStorage;
