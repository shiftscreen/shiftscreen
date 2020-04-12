import styled from 'styled-components';
import { Card as AntdCard } from 'antd';
import { Colors } from 'constants/index';

export const Card = styled(AntdCard)`
  overflow: hidden;
  
  .ant-btn-link {
    width: 75%;
  }
`;

export const Cover = styled.div`
  width: 100%;
  height: 2rem;
  background: ${Colors.teal};
`;

export const Title = styled.div`
  font-weight: 600;
`;
