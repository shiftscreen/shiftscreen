import React from 'react';
import { BasicSlidePartsFragment } from 'generated/graphql';

import {
  Container,
  Inner,
  LeftContainer,
} from './StudioEditorStyle';
import SlidePreview from './SlidePreview';
import SlideSettings from './SlideSettings';
import SlideModuleConfig from './SlideModuleConfig';

interface Props {
  slide: BasicSlidePartsFragment | undefined;
  slides: BasicSlidePartsFragment[];
}

const StudioEditor: React.FC<Props> = ({ slide, slides }: Props) => (
  <Container>
    <Inner>
      <LeftContainer>
        <SlidePreview
          selectedSlide={slide}
          slides={slides}
        />
        {slide && (
          <SlideSettings slide={slide}/>
        )}
      </LeftContainer>
      {slide && (
        <SlideModuleConfig slide={slide}/>
      )}
    </Inner>
  </Container>
);

export default StudioEditor;
