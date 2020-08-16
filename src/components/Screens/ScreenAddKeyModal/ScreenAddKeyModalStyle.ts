import styled from 'styled-components';
import { Card as AntdCard } from 'antd';

export const Inner = styled.div`
  display: grid;
  grid-gap: 1rem;
`;

export const Text = styled.p`
  margin: 0;
  text-align: center;
  
  &:not(:first-child) {
    margin-top: 0.5rem;
  }
`;

export const Card = styled(AntdCard)`
  .ant-card-body {
    padding: 0.5rem;
    font-weight: 600;
    text-align: center;
    font-size: 1.25rem;
  }
`;
