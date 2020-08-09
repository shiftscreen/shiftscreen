import React from 'react';
import { useParams } from 'react-router';
import * as R from 'ramda';

import {
  BasicSlidePartsFragment,
  Slide,
  useScreenExtendedByIdQuery,
  useUpdateScreenMutation,
} from 'generated/graphql';
import { Header, SlidesList, Editor, SlideConfig } from 'components/Studio';
import { ErrorAlert, LoadingIndicator } from 'shared';
import { Container, Inner } from './StudioStyle';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Roboto:900,700,600']
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
  const screen = data?.screen;
  const slides = screen?.slides || [];
  const slidesOrder: number[] = screen?.slidesOrder;
  const selectedSlide = R.find<Slide>(
    R.propEq('id', selectedSlideId)
  )(slides);

  const [updateScreen, { loading: updateScreenLoading }] = useUpdateScreenMutation();
  const updateOrder = async (newOrder: number[]) => {
    if (!screen) return;

    const { slides, viewerRole, organization, ...rawScreen } = screen;

    try {
      await updateScreen({
        variables: {
          id: parseInt(id, 10),
          values: {
            slidesOrder: newOrder,
          }
        },
        optimisticResponse: {
          __typename: 'Mutation',
          updateScreen: {
            ...rawScreen,
            slidesOrder: newOrder,
            __typename: 'Screen',
          }
        }
      })
    } catch (e) {
      console.error(e)
    }
  };

  const handleOrderChange = (startIndex: number, destinationIndex: number): void => {
    const id = slidesOrder[startIndex];
    const newOrder: number[] = R.pipe(
      R.remove<number>(startIndex, 1),
      R.insert(destinationIndex, id)
    )(slidesOrder);

    updateOrder(newOrder);
  };

  const getOrderedSlides = (): BasicSlidePartsFragment[] => {
    if (R.isNil(screen)) {
      return [];
    }

    const toSlide = (id: number) => (
      R.find<Slide>(
        R.propEq('id', id.toString())
      )(slides)
    );
    const list = R.map(toSlide, screen.slidesOrder);
    const filteredList: any = R.reject(R.isNil, list);
    const listHaveUndefinedSlides = R.not(R.equals(list, filteredList));
    const shouldUpdate = R.and(listHaveUndefinedSlides, R.not(updateScreenLoading));

    if (shouldUpdate) {
      const toId = (s: Slide): number => parseInt(s.id, 10);
      const newOrder = R.map(toId, filteredList);
      updateOrder(newOrder);
    }

    return filteredList || [];
  };
  const orderedSlides = getOrderedSlides();

  const handleSlideSelect = (slide: Slide) => (
    setSelectedSlideId(slide.id)
  );

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
