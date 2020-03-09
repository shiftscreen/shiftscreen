import styled from 'styled-components';
import { Colors } from 'constants/index';

export const Container = styled.header`
  background: ${Colors.white};
  color: ${Colors.grey};
  font-size: 1rem;
  padding: 0 1rem;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${Colors.greyLight};
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
`;

export const Title = styled.h2`
  margin: 0;
  font-weight: 600;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  
  & > * {
    margin-left: 1rem;
  }
`;
