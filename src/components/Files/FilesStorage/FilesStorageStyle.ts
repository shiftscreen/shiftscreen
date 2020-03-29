import styled from 'styled-components';
import { Card as AntdCard } from 'antd';

export const Card = styled(AntdCard)`
  .ant-card-body {
    padding: 0;
  }
  
  .ant-description-view {
    border: 0;
    border-top: 1px solid #f0f0f0;
  }
`;
