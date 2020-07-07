import React from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';

import { BasicScreenPartsFragment, BasicSlidePartsFragment } from 'generated/graphql';
import { Container, Inner } from './StudioSlidesListStyle';
import { AddCard as SlideAddCard } from 'components/Slides';
import View from './StudioSlidesListView';

interface Props {
  slides: BasicSlidePartsFragment[];
  screen: BasicScreenPartsFragment;
  selectedSlide: BasicSlidePartsFragment | undefined;
  onSlideSelect(slide: BasicSlidePartsFragment): void;
  onOrderChange(startIndex: number, destinationIndex: number): void;
}

const StudioSlidesList: React.FC<Props> = (props: Props) => {
  const {
    slides,
    screen,
    selectedSlide,
    onSlideSelect,
    onOrderChange
  } = props;

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    onOrderChange(
      result.source.index,
      result.destination.index,
    )
  };

  return (
    <Container>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="list" direction="horizontal">
          {provided => (
            <Inner ref={provided.innerRef} {...provided.droppableProps}>
              <View
                slides={slides}
                screen={screen}
                onSlideSelect={onSlideSelect}
                selectedSlide={selectedSlide}
              />
              {provided.placeholder}
              <SlideAddCard screen={screen}/>
            </Inner>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  );
};

export default StudioSlidesList;
