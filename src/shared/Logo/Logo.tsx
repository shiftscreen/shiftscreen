import React from 'react';

import { ReactComponent as LogoColor } from 'assets/vectors/logo-color.svg';
import { ReactComponent as LogoWhite } from 'assets/vectors/logo-white.svg';

interface Props {
  color: 'white' | 'full';
  className?: string;
}

const Logo: React.FC<Props> = ({ color, ...props }) => (
  color === 'white'
    ? <LogoWhite {...props} />
    : <LogoColor {...props} />
);

export default Logo;
