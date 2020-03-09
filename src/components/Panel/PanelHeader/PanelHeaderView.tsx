import React from 'react';

import {
  Container,
  Title,
  ActionsWrapper
} from './PanelHeaderStyle';

interface Props {
  title: string;
  actions?: React.ReactElement;
}

const PanelHeader: React.FC<Props> = (props: Props) => {
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

export default PanelHeader;
