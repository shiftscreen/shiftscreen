import styled from 'styled-components';

interface ContainerProps {
  bordered: boolean;
  height: number;
  width: number;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  cursor: pointer;
  border: 1px solid #f0f0f0;
  border-radius: 7px;
  overflow: hidden;
  transition: 0.2s ease-in-out;
  
  ${({ width, height }: ContainerProps) => `
    width: ${width}px;
    height: ${height}px;
  `}

  ${({ bordered }: ContainerProps) => (
    bordered && `border: 2px solid #dddddd;`
  )}
  
  &:hover {
    filter: brightness(95%);
  }
`;

export const ActionsWrapper = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 10;
  display: flex;
  border-radius: 0.25rem;
  overflow: hidden;
`;

export const Action = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1rem;
  background: rgba(0,0,0,0.25);
  color: #fff;
  transition: 0.2s ease-in-out;
  
  &:hover {
    background: rgba(0,0,0,0.5);
  }
`;

export const PreviewContainer = styled.div`
  pointer-events: none;
`;
