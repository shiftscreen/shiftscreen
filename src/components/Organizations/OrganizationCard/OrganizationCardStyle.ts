import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 3rem 3rem;
  grid-gap: 1rem;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  h4 {
    margin: 0;
  }
`;
