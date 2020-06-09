import React from 'react';
import { BasicSlidePartsFragment } from 'generated/graphql';
import { DeleteOutlined } from '@ant-design/icons';

import {
  Container,
  ActionsWrapper,
  Action,
  PreviewContainer,
} from './ListElementStyle';
import { Preview as SlidePreview } from 'components/Slides';
import { Scaled } from 'shared';

interface Props {
  slide: BasicSlidePartsFragment;
  selected: boolean;
}

const ListElementView: React.FC<Props> = ({ slide, selected }: Props) => {

  const size = {
    height: 200,
    width: 400,
  };

  return (
    <Container bordered={selected} {...size}>
      <ActionsWrapper>
        <Action>
          <DeleteOutlined/>
        </Action>
        <Action>
          <DeleteOutlined/>
        </Action>
      </ActionsWrapper>
      <PreviewContainer>
        <Scaled {...size}>
          <SlidePreview slide={slide}/>
        </Scaled>
      </PreviewContainer>
    </Container>
  );
};

export default ListElementView;
