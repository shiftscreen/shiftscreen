import React from 'react';
import { BasicAppInstancePartsFragment } from 'generated/graphql';
import { Scaled } from 'shared';
import { InstancePreview } from 'components/Modules';

import {
  Container,
  Inner,
  Title,
} from './ModuleInstanceCardStyle';
import CardActions from './CardActions';

interface Props {
  instance: BasicAppInstancePartsFragment;
}

const ModuleInstanceCardView: React.FC<Props> = ({ instance }: Props) => {
  const { title } = instance;

  const actions = CardActions({ instance });

  const size = {
    height: 180,
    width: 320,
  };

  return (
    <Container actions={actions}>
      <Inner>
        <Scaled {...size}>
          <InstancePreview instance={instance}/>
        </Scaled>
        <Title>
          {title}
        </Title>
      </Inner>
    </Container>
  );
};

export default ModuleInstanceCardView;
