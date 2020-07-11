import styled from 'styled-components';
import { TwitterPicker } from 'react-color';

export const Picker = styled(TwitterPicker)`
  position: absolute !important;
  right: 0 !important;
  z-index: 1000 !important;
  border-radius: 7px !important;
  box-shadow: none !important;
  border: 1px solid rgb(240, 239, 242) !important;
`;
