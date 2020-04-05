import React from 'react';
import { Badge } from 'antd';

import { Screen } from 'types';
import {
  Image,
  Title,
  Card
} from './ScreenCardStyle';

import CardActions from './CardActions';

const { Meta } = Card;

interface Props {
  screen: Screen
}

const ScreenCard: React.FC<Props> = (props: Props) => {
  const { screen } = props;

  const actions = CardActions(screen);

  const cover = (
    <Image src="https://i.imgur.com/wDfxXP5.png"/>
  );

  const title = (
    <Title>{screen.title}</Title>
  );

  const description = screen.isActive
    ? (<Badge status="success" text="Aktywny" />)
    : (<Badge status="warning" text="Nieaktywny" />);

  return (
    <Card
      actions={actions}
      cover={cover}
    >
      <Meta
        title={title}
        description={description}
      />
    </Card>
  );
};

export default ScreenCard;
