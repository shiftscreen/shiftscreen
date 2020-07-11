import styled from 'styled-components';
import { Card } from 'antd';

import { Colors } from 'constants/index';

interface ContainerProps {
  bottomBorder: boolean;
  clickable: boolean;
}

export const Container = styled(Card)<ContainerProps>`
  .ant-card-body {
    padding: 0;
    overflow: hidden;
    border-top-right-radius: 7px;
    border-top-left-radius: 7px;
    
    ${({ bottomBorder }: ContainerProps) => (
      bottomBorder && `
        border-bottom-right-radius: 7px;
        border-bottom-left-radius: 7px;
      ` 
    )}
    
    ${({ clickable }: ContainerProps) => (
      clickable && `
        cursor: pointer;
        transition: 0.2s ease-in-out;

        &:hover {
          filter: brightness(95%);
        }
      `
    )}
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
