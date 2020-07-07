import styled from 'styled-components';
import { Card } from 'antd';

import { Colors } from 'constants/index';

export const Container = styled(Card)`
  .ant-card-body {
    padding: 0;
    overflow: hidden;
    border-top-right-radius: 7px;
    border-top-left-radius: 7px;
  }
`;

export const Inner = styled.div`
  position: relative;
  display: flex;
  
  & > div:first-child {
    pointer-events: none;
  }
`;

export const Title = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  text-align: center;
  font-weight: 600;
  background: rgba(244, 244, 244, 0.75);
  color: ${Colors.black};
`;
