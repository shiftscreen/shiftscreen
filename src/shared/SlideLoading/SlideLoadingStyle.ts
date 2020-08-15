import { Slides } from 'constants/index';
import styled from 'styled-components';

const size = Slides.size.base;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${size.width}px;
  height: ${size.height}px;
`;
