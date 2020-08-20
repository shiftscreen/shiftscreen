import styled from 'styled-components';
import { Logo } from 'shared';

export const KeyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 10vw;
  font-weight: 800;
  font-family: 'Roboto', 'Catamaran', sans-serif;
`;

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  cursor: none;
`;

export const LogoWatermarkWrapper = styled.div`
  svg {
    position: absolute;
    left: 2vw;
    bottom: 2vw;
    height: 2vw;
    width: auto;
    z-index: 100;
    mix-blend-mode: difference;
    opacity: 0.05;
  }
`;
