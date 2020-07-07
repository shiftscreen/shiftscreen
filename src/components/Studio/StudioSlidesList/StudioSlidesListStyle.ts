import styled from 'styled-components';

export const Container = styled.div`
  grid-area: list;
  padding: 2rem;
  background: #F4F4F4;
  width: 100%;
  overflow-x: scroll;
  display: flex;
  
  @media screen and (min-width: 1921px) {
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
  }
`;

export const Inner = styled.div`
  display: inline-flex;
  & > article, & > button {
    margin-right: 2rem;
  }
`;
