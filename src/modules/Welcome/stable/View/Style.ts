import styled from 'styled-components';
import { BorderType } from '../WelcomeTypes';
import { MediaView } from 'shared';

interface ContainerProps {
  border: BorderType;
}

export const Inner = styled.div`
  display: flex;
  align-items: center;
`;

export const Container = styled.div<ContainerProps>`
  position: relative;
  width: 960px;
  height: 540px;
  background: #FAFAFA;
  display: flex;
  justify-content: center;
  align-items: center;
  
  ${({ border }: ContainerProps) => `
    border: ${border.width}px solid ${border.color};
    
    ${Inner} {
      max-width: calc(100% - ${border.width * 2}px);
    }
  `}
`;

export const Text = styled.h2`
  margin: 0;
  font-size: 5rem;
  font-weight: 900;
  line-height: 1.2;
  text-transform: uppercase;
  word-break: break-word;
  
  &:not(:last-child) {
    padding-right: 1em;
  }
`;

interface NameProps {
  color: string;
}

export const Name = styled.span<NameProps>`
  ${({ color }: NameProps) => `
    color: ${color};
  `}
`;

export const Image = styled(MediaView)`
  height: 10rem;
`;
