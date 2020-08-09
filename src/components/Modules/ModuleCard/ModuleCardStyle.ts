import styled from 'styled-components';
import { Card } from 'antd';

export const Container = styled(Card)`
  cursor: pointer;
  transition: 0.2s ease-in-out;
  border-radius: 7px;
  
  &:hover {
    filter: brightness(95%);
  }

  .ant-card-body {
    padding: 0;
  }
`;
