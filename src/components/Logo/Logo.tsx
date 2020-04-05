import React from 'react';

import { ReactComponent as LogoColor } from 'assets/vectors/logo-color.svg';
import { ReactComponent as LogoWhite } from 'assets/vectors/logo-white.svg';

interface Props {
  color: 'white' | 'full';
}

const Logo: React.FC<Props> = (props: Props) => {
  const { color } = props;

  return color === 'white' ? <LogoWhite/> : <LogoColor/>;
};

export default Logo;
