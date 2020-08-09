import styled from 'styled-components';

export const Container = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Inner = styled.div`
  display: grid;
  grid-template-areas:
    "preview"
    "list";
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  max-width: 1920px;
  margin: auto;
  height: 100%;
  width: 100%;
`;
