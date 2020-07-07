import React from 'react';

import { BasicSlidePartsFragment } from 'generated/graphql';
import { Container } from './SlideSettingsStyle';
import SlideDuration from './SlideDuration';
import SlideTransition from './SlideTransition';
import SlideAdvanced from './SlideAdvanced';

interface Props {
  slide: BasicSlidePartsFragment;
}

const SlideSettingsView: React.FC<Props> = ({ slide }: Props) => {

  return (
    <Container>
      <SlideDuration slide={slide}/>
      <SlideTransition slide={slide}/>
      <SlideAdvanced slide={slide}/>
    </Container>
  );
};



export default SlideSettingsView;
