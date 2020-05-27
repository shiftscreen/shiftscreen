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
    border-bottom: 0;
    border-radius: 0;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 1rem;
  font-size: 1.25rem;
  font-weight: 600;
`;
