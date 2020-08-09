import { DataProxy } from 'apollo-cache';
import {
  BasicScreenPartsFragment,
  BasicSlidePartsFragment,
  ScreenExtendedByIdDocument,
  ScreenExtendedByIdQuery,
} from 'generated/graphql';

export const updateCache = (
  cache: DataProxy,
  slide: BasicSlidePartsFragment,
  screen: BasicScreenPartsFragment
) => {
  const current = cache.readQuery<ScreenExtendedByIdQuery>({
    query: ScreenExtendedByIdDocument,
    variables: {
      id: parseInt(screen.id, 10),
    }
  });

  if (current && current?.screen?.slides) {
    const updatedSlides = current.screen.slides.filter(s => s.id !== slide.id);
    const updatedData = {
      screen: {
        ...current.screen,
        slides: updatedSlides,
      }
    };

    cache.writeQuery({
      query: ScreenExtendedByIdDocument,
      data: updatedData,
    });
  }
};
