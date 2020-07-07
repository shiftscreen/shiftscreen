import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { Scaled } from 'shared';
import { Preview } from 'components/Slides';
import { BasicSlidePartsFragment } from 'generated/graphql';
import { Info } from './SlidePreviewStyle';

interface Props {
  slide?: BasicSlidePartsFragment;
  size: { height: number; width: number };
}

const SlidePreview: React.FC<Props> = ({ slide, size }: Props) => {
  if (!slide) return (
    <Info>Wybierz slajd</Info>
  );

  return (
    <TransitionGroup>
      <CSSTransition
        key={slide.id}
        timeout={200}
        classNames="fade"
      >
        <div>
          <Scaled {...size}>
            <Preview slide={slide}/>
          </Scaled>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default SlidePreview;
