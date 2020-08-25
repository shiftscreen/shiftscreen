import React from 'react';
import { useParams } from 'react-router';
import * as R from 'ramda';

import {
  BasicSlidePartsFragment,
  Slide, useNotifyScreenUpdatedMutation,
  useScreenExtendedByIdQuery,
  useUpdateScreenMutation,
} from 'generated/graphql';
import { Editor, Header, SlideConfig, SlidesList } from 'components/Studio';
import { ErrorAlert, LoadingIndicator } from 'shared';
import { Container, Inner } from './StudioStyle';
import WebFont from 'webfontloader';
import { getOrderedSlides, useUpdateOrder } from './StudioUtils';
import AwesomeDebouncePromise from 'awesome-debounce-promise';

WebFont.load({
  google: {
    families: ['Roboto:900,700,600,500']
  },
});

interface Params {
  id: string;
}

const Studio: React.FC = () => {
  const { id } = useParams<Params>();
  const { data, error, loading } = useScreenExtendedByIdQuery({
    variables: { id: parseInt(id, 10) },
  });

  const [selectedSlideId, setSelectedSlideId] = React.useState<string | undefined>();
  const [updateOrder, { loading: updateOrderLoading }] = useUpdateOrder(data?.screen);
  const [notifyScreenUpdated] = useNotifyScreenUpdatedMutation({
    variables: { id: parseInt(data?.screen.id || '', 10) }
  });
  const screen = data?.screen;
  const slides = screen?.slides || [];
  const slidesOrder: number[] = screen?.slidesOrder || [];
  const selectedSlide = R.find<Slide>(
    R.propEq('id', selectedSlideId)
  )(slides);

  const handleOrderChange = (startIndex: number, destinationIndex: number): void => {
    const id = slidesOrder[startIndex];
    const newOrder: number[] = R.pipe(
      R.remove<number>(startIndex, 1),
      R.insert(destinationIndex, id)
    )(slidesOrder);

    updateOrder(newOrder);
  };

  const orderedSlides = getOrderedSlides({
    screen,
    slides,
    updateOrder,
    slidesOrder,
    updateOrderLoading,
  });

  const handleSlideSelect = (slide: Slide) => (
    setSelectedSlideId(slide.id)
  );

  const debouncedNotifyScreenUpdated = React.useCallback(
    AwesomeDebouncePromise(notifyScreenUpdated, 3000),
    [screen?.id],
  );

  React.useEffect(() => {
    debouncedNotifyScreenUpdated();
  }, [screen]);

  if (loading) return (
    <LoadingIndicator fullHeight/>
  );

  if (!data || error) return (
    <ErrorAlert error={error}/>
  );

  return (
    <Container>
      <Header screen={data.screen}/>
      <Inner>
        <Editor slide={selectedSlide} slides={orderedSlides}/>
        <SlidesList
          slides={orderedSlides}
          screen={data.screen}
          selectedSlide={selectedSlide}
          onSlideSelect={handleSlideSelect}
          onOrderChange={handleOrderChange}
        />
        <SlideConfig/>
      </Inner>
    </Container>
  );
};

export default Studio;
