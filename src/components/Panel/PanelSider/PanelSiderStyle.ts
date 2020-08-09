import styled from 'styled-components';
import { Logo } from 'shared';
import { Colors } from 'constants/index';

export const Container = styled.aside`
  background: ${Colors.whitePure};
  width: 20rem;
  min-height: 100vh;
  border-right: 1px solid #f0f0f0;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;

  & > svg {
   height: 2rem;
  }
`;

export { Logo };

