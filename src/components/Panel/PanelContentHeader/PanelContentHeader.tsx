import React from 'react';

import { ActionsWrapper, Container, Title } from './PanelContentHeaderStyle';

interface Props {
  title: string;
  actions?: React.ReactElement;
}

const PanelContentHeader: React.FC<Props> = (props: Props) => {
  const { title, actions } = props;

  return (
    <Container>
      <Title>{title}</Title>
      <ActionsWrapper>
        {actions}
      </ActionsWrapper>
    </Container>
  );
};

export default PanelContentHeader;
