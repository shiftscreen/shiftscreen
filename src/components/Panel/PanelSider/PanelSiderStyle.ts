import styled from 'styled-components';
import Logo from 'components/Logo';
import { Colors } from 'constants/index';

export const Container = styled.aside`
  background: ${Colors.greyDark};
  width: 20rem;
  min-height: 100vh;
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

