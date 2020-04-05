import styled from 'styled-components';
import { Colors } from 'constants/index';

export const Container = styled.div`
  font-size: 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  margin: 0;
  font-weight: 600;
  color: ${Colors.black};
`;

export const ActionsWrapper = styled.div`
  display: flex;
  
  & > * {
    margin-left: 1rem;
  }
`;
