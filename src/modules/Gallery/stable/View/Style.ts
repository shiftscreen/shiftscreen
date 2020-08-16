import styled from 'styled-components';
import { Slides } from 'constants/index';
import { MediaView } from 'shared';

const size = Slides.size.base;

export const Image = styled(MediaView)`
  width: ${size.width}px;
  height: ${size.height}px;
  object-fit: cover;
`;
