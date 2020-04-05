import styled from 'styled-components';
import { Colors } from 'constants/index';

export const Container = styled.div`
  padding: 4rem 0;
  min-height: 100vh;
  background: linear-gradient(to top right, ${Colors.teal}, ${Colors.magenta})
`;

export const Inner = styled.div`
  background: ${Colors.whitePure};
  border-radius: 7px;
  padding: 2rem;
  margin: 0 auto 0 auto;
  width: 90vw;
  max-width: 60rem;
  height: auto;
`;
