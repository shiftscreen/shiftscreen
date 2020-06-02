import styled from 'styled-components';
import { Card } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Colors } from 'constants/index';

export const Container = styled(Card)`
  height: 15rem;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  
  .ant-card-body {
    padding: 0;
    height: 100%;
  }
  
  &:hover {
    filter: brightness(90%);
  }
`;

export const Inner = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  height: 100%;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  
  span {
    margin: 0;
    padding: 0.25rem 0.75rem;
    font-size: 1rem;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  
  .ant-dropdown-trigger {
    background: rgba(255,255,255, 0.5);
    color:  rgba(0,0,0, 0.5);
    border: 0;
    padding: 0;
    width: 2.5rem;
    
    &:hover {
      background: rgba(255,255,255, 0.75);
    }
  }
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${Colors.whitePure};
`;

export const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 5rem;
  color: rgba(255,255,255,0.25);
`;

