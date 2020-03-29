import styled from 'styled-components';

export const Container = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Inner = styled.section`
  display: grid;
  grid-gap: 2.5rem;
  text-align: center;
`;

export const LogoWrapper = styled.div`
  & > svg {
    height: 5rem;
  }
`;
