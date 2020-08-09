import React from 'react';
import { Spin } from 'antd';
import { LoadingContainer } from './LoadingIndicatorStyle';
import { LoadingOutlined } from '@ant-design/icons';

interface Props {
  fullHeight?: boolean;
}

const loadingIndicator = (
  <LoadingOutlined style={{ fontSize: 48 }} spin />
);

const LoadingIndicator: React.FC<Props> = ({ fullHeight }) => (
  <LoadingContainer fullHeight={fullHeight}>
    <Spin indicator={loadingIndicator} />
  </LoadingContainer>
);

export default LoadingIndicator;
