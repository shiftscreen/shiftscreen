import styled from 'styled-components';
import { Row } from 'antd';
import { Colors } from 'constants/index';

export const Container = styled.header`
  background: ${Colors.whitePure};
  color: ${Colors.grey};
  font-size: 1.25rem;
  padding: 0 1.5rem;
  height: 80px;
`;

export const Inner = styled(Row)`
  height: 100%;
`;
