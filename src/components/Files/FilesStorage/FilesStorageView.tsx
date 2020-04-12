import React from 'react';
import { Typography, Progress } from 'antd';
import fileSize from 'filesize';

import { Colors } from 'constants/index';
import {
  Card,
  Descriptions,
  ProgressWrapper
} from './FilesStorageStyle';

const { Text } = Typography;

interface Props {
  usedKilobytes: number;
  maxKilobytes: number;
}

const FilesStorage: React.FC<Props> = (props: Props) => {
  const { usedKilobytes, maxKilobytes } = props;

  // KB to B
  const usedInfo = fileSize(usedKilobytes * 1000);
  const remainingInfo = fileSize((maxKilobytes - usedKilobytes) * 1000);
  const percent = Math.round((usedKilobytes / maxKilobytes) * 100);

  const title = (<Text strong>Twoja przestrzeń</Text>);

  return (
    <Card title={title}>
      <Descriptions bordered>
        <Descriptions.Item label="Zajęto" span={3}>
          {usedInfo}
        </Descriptions.Item>
        <Descriptions.Item label="Pozostało" span={3}>
          {remainingInfo}
        </Descriptions.Item>
      </Descriptions>
      <ProgressWrapper>
        <Progress percent={percent} strokeColor={Colors.violet} />
      </ProgressWrapper>
    </Card>
  );
};

export default FilesStorage;
