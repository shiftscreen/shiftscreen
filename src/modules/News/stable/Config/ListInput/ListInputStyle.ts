import styled from 'styled-components';
import { Card } from 'antd';

export const Container = styled.div`
  display: grid;
  grid-gap: 1rem;
`;

export const ElementContainer = styled.div`
  display: flex;
  
  .dynamic-delete-button {
    font-size: 1rem;
    padding-left: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ElementCard = styled(Card)`
  .ant-card-body {
    display: grid;
    grid-gap: 0.5rem;
    padding: 0.5rem 0.75rem;
  }
`;
