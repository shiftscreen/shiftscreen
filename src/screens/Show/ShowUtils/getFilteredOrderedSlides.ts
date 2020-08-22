import { BasicSlidePartsFragment, ScreenExtendedByKeyQuery, Slide } from 'types';
import * as R from 'ramda';

export const getFilteredOrderedSlides = (data?: ScreenExtendedByKeyQuery): BasicSlidePartsFragment[] => {
  const screen = data?.screenByKey;
  const slides = screen?.slides || [];
  const slidesOrder: number[] = screen?.slidesOrder || [];

  if (R.isNil(screen)) {
    return [];
  }

  const toSlide = (id: number) => (
    R.find<Slide>(
      R.propEq('id', id.toString())
    )(slides)
  );
  const list = R.map(toSlide, slidesOrder);
  const orderedList: any = R.reject(R.isNil, list);

  return orderedList.filter((slide: BasicSlidePartsFragment) => slide.isActive);
};
