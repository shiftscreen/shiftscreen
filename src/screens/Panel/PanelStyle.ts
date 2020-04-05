import styled from 'styled-components';
import { Layout } from 'antd';

export const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 20rem auto;
`;

export const Inner = styled.section`
  background: #FAF9FC;
`;

export const Content = styled(Layout.Content)`
  margin: 1.5rem;
  display: grid;
  grid-gap: 1.5rem;
`;
