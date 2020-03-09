import styled from 'styled-components';
import { Layout } from 'antd';

export const Container = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 20rem auto;
`;

export const Inner = styled.section``;

export const Content = styled(Layout.Content)`
  margin: 1rem;
  display: grid;
  grid-gap: 1rem;
`;
