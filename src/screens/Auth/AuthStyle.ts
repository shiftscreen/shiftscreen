import styled from 'styled-components';
import { Colors } from 'constants/index';

export const Container = styled.main`
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
`;

const absoluteStyle = `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  ${absoluteStyle};
  z-index: 0;
  object-fit: cover;
`;

export const Overlay = styled.div`
  ${absoluteStyle};
  z-index: 1;
  background: linear-gradient(to top right, ${Colors.teal}, ${Colors.magenta});
  opacity: 0.75;
`;

export const Inner = styled.section`
  z-index: 2;
  display: grid;
  grid-template-rows: 3rem auto;
  grid-gap: 4rem;
  text-align: center;
  width: 30rem;
  padding: 4rem;
  background: ${Colors.whitePure};
  
  .ant-tabs-bar {
    margin-bottom: 2rem;
  }
  
  .ant-tabs-content {
    margin: auto !important;
  }
`;

export const LogoWrapper = styled.div`
  margin: auto;
  width: 66%;
  max-width: 25rem;
  & > svg {
    width: 100%;
    margin: auto;
  }
`;
