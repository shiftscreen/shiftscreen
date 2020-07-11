import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-gap: 1rem;
`;

export const List = styled.ul`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, 320px);
  list-style: none;
  padding: 0;
  margin: auto;
`;

export const ListElement = styled.li``;
