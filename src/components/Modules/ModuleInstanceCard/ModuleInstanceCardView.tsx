import React from 'react';
import { BasicAppInstancePartsFragment } from 'generated/graphql';
import { Scaled } from 'shared';
import { InstancePreview } from 'components/Modules';

import { Container, Inner, Title, } from './ModuleInstanceCardStyle';
import CardActions from './CardActions';

interface Props {
  instance: BasicAppInstancePartsFragment;
  hideActions?: boolean;
  clickable?: boolean;
  onClick?(instance: BasicAppInstancePartsFragment): void;
}

const ModuleInstanceCardView: React.FC<Props> = ({
  instance,
  hideActions = false,
  clickable = false,
  onClick,
}: Props) => {
  const { title } = instance;

  const actions = hideActions ? undefined : CardActions({ instance });

  const size = {
    height: 180,
    width: 320,
  };

  const handleClick = () => {
    if (onClick !== undefined) {
      onClick(instance)
    }
  };

  return (
    <Container
      actions={actions}
      onClick={handleClick}
      bottomBorder={hideActions}
      clickable={clickable}
    >
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
