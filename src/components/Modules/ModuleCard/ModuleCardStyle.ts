import styled from 'styled-components';
import { Card } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Container = styled(Card)`
  cursor: pointer;
  transition: 0.2s ease-in-out;
  border-radius: 7px;
  
  &:hover {
    filter: brightness(95%);
  }

  .ant-card-body {
    padding: 0;
  }
`;

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
