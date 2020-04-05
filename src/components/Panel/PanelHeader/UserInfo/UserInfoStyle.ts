import styled from 'styled-components';
import { Colors } from 'constants/index';
import { CaretDownOutlined } from '@ant-design/icons';

export const Container = styled.div`
  color: ${Colors.grey};
  cursor: pointer;
`;

export const CaretDownIcon = styled(CaretDownOutlined)`
  font-size: 1rem;
`;
