import styled from 'styled-components';
import { Colors } from 'constants/index';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 960px;
  height: 540px;
  
  background: linear-gradient(270deg, ${Colors.teal}, ${Colors.violet});
  background-size: 400% 400%;

  -webkit-animation: DefaultSlideBackground 10s ease infinite;
  -moz-animation: DefaultSlideBackground 10s ease infinite;
  -o-animation: DefaultSlideBackground 10s ease infinite;
  animation: DefaultSlideBackground 10s ease infinite;
  
  @-webkit-keyframes DefaultSlideBackground {
      0%{background-position:0% 50%}
      50%{background-position:100% 50%}
      100%{background-position:0% 50%}
  }
  @-moz-keyframes DefaultSlideBackground {
      0%{background-position:0% 50%}
      50%{background-position:100% 50%}
      100%{background-position:0% 50%}
  }
  @-o-keyframes DefaultSlideBackground {
      0%{background-position:0% 50%}
      50%{background-position:100% 50%}
      100%{background-position:0% 50%}
  }
  @keyframes DefaultSlideBackground {
      0%{background-position:0% 50%}
      50%{background-position:100% 50%}
      100%{background-position:0% 50%}
  }
`;

export const LogoWrapper = styled.div`
  svg {
    height: 96px;
    width: auto;
  }
`;
