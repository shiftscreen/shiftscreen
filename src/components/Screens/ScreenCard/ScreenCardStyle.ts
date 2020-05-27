import styled from 'styled-components';
import { Card } from 'antd';
import { Colors } from 'constants/index';

export const Container = styled(Card)`
  padding: 0;
  height: 10rem;
`;

export const Inner = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: ${Colors.whitePure};
`;

