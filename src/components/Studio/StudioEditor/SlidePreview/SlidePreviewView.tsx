import React from 'react';

import { ScaledTypes } from 'types';
import { Show } from 'components/Slides';
import { BasicSlidePartsFragment } from 'generated/graphql';
import { Info, Container } from './SlidePreviewStyle';

interface Props {
  selectedSlide?: BasicSlidePartsFragment;
  slides: BasicSlidePartsFragment[];
}

const size: ScaledTypes.SizeType = {
  width: 720,
  height: 405,
};

const SlidePreview: React.FC<Props> = ({ selectedSlide, slides }: Props) => {
  if (!selectedSlide) return (
    <Container style={{ ...size }}>
      <Info>Wybierz slajd</Info>
    </Container>
  );

  return (
    <Container style={{ ...size }}>
      <Show
        size={size}
        slides={slides}
        selectedId={selectedSlide.id}
      />
    </Container>
  );
};

export default SlidePreview;
