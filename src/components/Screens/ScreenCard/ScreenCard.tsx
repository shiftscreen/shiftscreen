import React from 'react';
import { Badge, Tag } from 'antd';

import { Role } from 'types';
import {
  Cover,
  Title,
  Card
} from './ScreenCardStyle';

import CardActions from './CardActions';

const { Meta } = Card;

interface Props {
  role: Role;
}

const ScreenCard: React.FC<Props> = (props: Props) => {
  const { role } = props;
  const { screen } = role;

  if (screen === undefined) return null;

  const actions = CardActions(role);

  const cover = (
    <Cover/>
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
