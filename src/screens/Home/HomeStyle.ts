import styled from 'styled-components';
import { SmileOutlined } from '@ant-design/icons';

export const Container = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Inner = styled.section`
  text-align: center;
`;

export const Smile = styled(SmileOutlined)`
  font-size: 2.5rem;
`;

export const Text = styled.p`
  font-size: 2.5rem;
  font-weight: 600;
`;
