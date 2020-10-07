import {
  BasicScreenPartsFragment,
  BasicSlidePartsFragment,
  Slide,
  useNotifyScreenUpdatedMutation,
  useUpdateScreenMutation
} from '../../generated/graphql';
import { ScreenTypes } from '../../types';
import * as R from 'ramda';
import React from 'react';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import { handleError } from '../../utils';

export const useUpdateOrder = (screen?: ScreenTypes.ScreenExtended): [
  (newOrder: number[]) => Promise<void>,
  { loading: boolean },
] => {
  const [updateScreen, { loading }] = useUpdateScreenMutation();

  const updateOrder = async (newOrder: number[]) => {
    if (!screen) return;

    const { slides, viewerRole, organization, ...rawScreen } = screen;

    try {
      await updateScreen({
        variables: {
          id: parseInt(screen.id, 10),
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
      handleError(e);
    }
  };

  return [updateOrder, { loading }];
};

export const getOrderedSlides = (
  {
    screen,
    slides,
    updateOrder,
    slidesOrder,
    updateOrderLoading,
  }: {
    slides: BasicSlidePartsFragment[],
    slidesOrder: number[],
    updateOrder(newOrder: number[]): Promise<void>,
    updateOrderLoading: boolean,
    screen?: ScreenTypes.ScreenExtended,
  }
): BasicSlidePartsFragment[] => {
  if (R.isNil(screen)) {
    return [];
  }

  const toSlide = (id: number) => (
    R.find<Slide>(
      R.propEq('id', id.toString())
    )(slides)
  );
  const list = R.map(toSlide, slidesOrder);
  const filteredList: any = R.reject(R.isNil, list);
  const listHaveUndefinedSlides = R.not(R.equals(list, filteredList));
  const shouldUpdate = R.and(listHaveUndefinedSlides, R.not(updateOrderLoading));

  if (shouldUpdate) {
    const toId = (s: Slide): number => parseInt(s.id, 10);
    const newOrder = R.map(toId, filteredList);
    updateOrder(newOrder);
  }

  return filteredList || [];
};
