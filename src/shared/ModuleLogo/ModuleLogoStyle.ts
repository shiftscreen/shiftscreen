import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  height: 10rem;
`;

export const LogoInner = styled.div`
  display: flex;
`;

export const Icon = styled(FontAwesomeIcon)`
  height: 5rem;
  width: 5rem !important;
  padding-right: 1rem;
  color: #FFF;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 1.5rem;
  color: #FFF;
  margin: 0;
  text-align: center;
`;
