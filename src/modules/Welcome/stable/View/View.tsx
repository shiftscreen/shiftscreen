import React from 'react';

import { ConfigType } from '../WelcomeTypes';

import {
  Container,
  Inner,
  Text,
  Name,
  Image,
} from './Style';

interface Props {
  config: ConfigType;
}

const View: React.FC<Props> = ({ config }: Props) => {
  const { name, text, border, image } = config;

  return (
    <Container border={border}>
      <Inner>
        <Text>
          Witamy<br/>
          w&nbsp;<Name color={text.highlightedColor}>{name}</Name>!
        </Text>
        <Image type="image" source={image} alt={name}/>
      </Inner>
    </Container>
  );
};

export default View;
