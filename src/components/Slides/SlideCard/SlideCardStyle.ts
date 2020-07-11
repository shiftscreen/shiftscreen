import styled from 'styled-components';

interface ContainerProps {
  bordered: boolean;
  height: number;
  width: number;
}

export const Container = styled.article<ContainerProps>`
  position: relative;
  cursor: pointer;
  border-radius: 7px;
  overflow: hidden;
  transition:
    box-shadow 0.2s ease-in-out,
    filter 0.2s ease-in-out; 
  
  ${({ width, height }: ContainerProps) => `
    width: ${width}px;
    height: ${height}px;
  `}

  ${({ bordered }: ContainerProps) => (
    bordered && `
     box-shadow: 0px 0px 0px 3px #c1c1c1;
    `
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
  cursor: pointer;
`;

export const Action = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1rem;
  background: rgba(0,0,0,0.25);
  color: #fff;
  transition: 0.2s ease-in-out;
  border: 0;
  
  &:hover {
    background: rgba(0,0,0,0.5);
  }
`;

interface PreviewContainerProps {
  isActive: boolean;
}

export const PreviewContainer = styled.div<PreviewContainerProps>`
  //pointer-events: none;
  transition: 0.2s ease-in-out;
  
  ${({ isActive }: PreviewContainerProps) => (
    !isActive && `filter: grayscale(1);`  
  )}
`;
