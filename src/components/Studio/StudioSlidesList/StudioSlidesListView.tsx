import React from 'react';
import * as R from 'ramda';
import { Draggable } from 'react-beautiful-dnd';

import { BasicScreenPartsFragment, BasicSlidePartsFragment } from 'generated/graphql';
import { Card as SlideCard } from 'components/Slides';

interface SlidesListProps {
  slides: BasicSlidePartsFragment[];
  screen: BasicScreenPartsFragment;
  selectedSlide: BasicSlidePartsFragment | undefined;
  onSlideSelect(slide: BasicSlidePartsFragment): void;
}

class SlidesList extends React.Component<SlidesListProps> {
  shouldComponentUpdate(nextProps: Readonly<SlidesListProps>): boolean {
    const { slides, selectedSlide } = this.props;
    const slidesUpdated = R.not(R.equals(nextProps.slides, slides));
    const selectedSlideUpdated = R.not(R.equals(nextProps?.selectedSlide?.id, selectedSlide?.id));

    return R.or(slidesUpdated, selectedSlideUpdated);
  }

  render() {
    const { selectedSlide, onSlideSelect, slides, screen } = this.props;

    const toListElement = (slide: BasicSlidePartsFragment, index: number) => (
      <Draggable
        key={slide.id}
        draggableId={slide.id}
        index={index}
      >
        {(provided) => (
          <SlideCard
            slide={slide}
            selected={R.equals(slide.id, selectedSlide?.id)}
            onSlideSelect={onSlideSelect}
            provided={provided}
            screen={screen}
          />
        )}
      </Draggable>
    );
    const mapIndexed = R.addIndex<any>(R.map);
    return mapIndexed(toListElement, slides);
  }
}

export default SlidesList;
