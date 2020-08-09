import styled from 'styled-components';

interface Props {
  fullHeight?: boolean;
}

export const LoadingContainer = styled.div<Props>`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10rem;
  
  ${({ fullHeight }: Props) => (
    fullHeight && `height: 100vh;`  
  )}
`;
