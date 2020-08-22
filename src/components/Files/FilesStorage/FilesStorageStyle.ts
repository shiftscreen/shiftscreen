import styled from 'styled-components';
import { Card as AntdCard, Descriptions as AntdDescriptions } from 'antd';

export const Card = styled(AntdCard)`
  .ant-card-body {
    padding: 0;
  }
`;

export const Descriptions = styled(AntdDescriptions)`
  &.ant-descriptions-bordered > .ant-descriptions-view {
    border: 0;
    border-top: 1px solid #F0EFF2;
    border-bottom: 1px solid #F0EFF2;
    border-radius: 0;
  }
`;

export const ProgressWrapper = styled.div`
  padding: 1rem;
`;
