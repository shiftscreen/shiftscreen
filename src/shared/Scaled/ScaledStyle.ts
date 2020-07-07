import styled from 'styled-components';

export interface ContainerProps {
  height?: number;
  width?: number;
  scale?: number;
}

export const Container = styled.div<ContainerProps>`
  display: inline-block;

  ${({ width, height, scale }: ContainerProps) => `
    width: ${width}px;
    height: ${height}px;
    
    
    & > * {
      transform: scale(${scale});
      transform-origin: left top;
    }
  `}
`;
