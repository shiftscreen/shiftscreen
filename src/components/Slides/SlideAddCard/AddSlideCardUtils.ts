import {
  AddSlideMutation,
  BasicScreenPartsFragment,
  NewSlideInput,
  ScreenExtendedByIdDocument,
  ScreenExtendedByIdQuery
} from 'generated/graphql';
import { DataProxy } from 'apollo-cache';
import { FetchResult } from 'apollo-link';

export const getDefaultValues = (screen: BasicScreenPartsFragment): NewSlideInput => ({
  durationSeconds: 60,
  screenId: parseInt(screen.id, 10),
  date: [],
  time: [],
  transition: {
    type: 'fade',
    durationMilliseconds: 300,
  },
  weekdays: [0, 1, 2, 3, 4, 5, 6],
});

export const updateCache = (
  cache: DataProxy,
  { data }: FetchResult<AddSlideMutation>,
  screen: BasicScreenPartsFragment
) => {
  const current = cache.readQuery<ScreenExtendedByIdQuery>({
    query: ScreenExtendedByIdDocument,
    variables: {
      id: parseInt(screen.id, 10),
    }
  });

  if (current?.screen?.slides && data?.addSlide) {
    cache.writeQuery<ScreenExtendedByIdQuery>({
      query: ScreenExtendedByIdDocument,
      data: {
        screen: {
          ...current.screen,
          slides: [...current.screen.slides, data.addSlide],
        },
      }
    });
  }
};
