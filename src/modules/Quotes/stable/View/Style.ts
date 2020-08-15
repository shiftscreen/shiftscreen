import styled, { css } from 'styled-components';
import { Slides } from 'constants/index';
import { MediaView } from 'shared';
import { rgba } from 'polished';

const size = Slides.size.base;

export const Image = styled(MediaView)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

interface WrapperProps {
  showDarkBackground: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 54px;
  width: 100%;
  height: 100%;
  
  ${({ showDarkBackground }) => showDarkBackground && `
    background: rgba(0, 0, 0, 0.5);
  `}
`;

export const Inner = styled.div`
  padding: 54px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-gap: 28px;
  grid-template-rows: 1fr 40px;
  color: #FFF;
  background: ${rgba('#2C88C5', 0.9)};
  border-radius: 8px;
  z-index: 10;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-style: italic;
  font-size: 48px;
  text-align: center;
  line-height: 1.2;
`;

export const Author = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  text-align: center;
  line-height: 1.2;
  font-size: 36px;
`;

interface ContainerProps {
  imageBeside: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: ${size.width}px;
  height: ${size.height}px;
  display: flex;
  background: #2C88C5;
  position: relative;
  
  ${({ imageBeside }) => imageBeside && css`
    display: grid;
    grid-template-rows: 100%;
    grid-template-columns: 1fr 1fr;
    
    ${Image} {
      position: relative;
    }
    
    ${Wrapper} {
      padding: 0;
      background: none;
    }
  `}
`;
