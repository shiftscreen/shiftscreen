import React from 'react';
import { ConfigType } from '../types';

import {
  Container,
  Text,
  TextDecoration,
  TextWrapper,
  Image
} from './ViewStyle';

interface Props {
  config: ConfigType;
}

const View: React.FC<Props> = ({ config }: Props) => {
  const { name, color } = config;

  return (
    <Container>
      <TextDecoration
        style={{
          backgroundColor: color,
        }}
      />
      <Text>
        Witamy<br/>
        w {name}!
      </Text>
      <Image/>
    </Container>
  );
};

export default View;
