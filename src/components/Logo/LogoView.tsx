import React from 'react';

import { ReactComponent as LogoBlack } from 'assets/vectors/logo-black.svg';
import { ReactComponent as LogoWhite } from 'assets/vectors/logo-white.svg';

interface Props {
  color: 'white' | 'dark';
}

const Logo: React.FC<Props> = (props: Props) => {
  const { color } = props;

  return color === 'white' ? <LogoWhite/> : <LogoBlack/>;
};

export default Logo;
