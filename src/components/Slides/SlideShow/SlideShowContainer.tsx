import React from 'react';
import * as R from 'ramda';
import { BasicSlidePartsFragment, ScaledTypes, Slide } from 'types';

import View from './SlideShowView';

interface Props {
  size: ScaledTypes.SizeType;
  slides: BasicSlidePartsFragment[];
  selectedId: string;
}

const SlideShow: React.FC<Props> = ({ slides, selectedId, size }: Props) => {
  const ref = React.useRef<any>();

  const getSelectedIndex = React.useCallback(() => (
    R.findIndex<Slide>(
      R.propEq('id', selectedId)
    )(slides)
  ), [slides, selectedId]);
  const selectedIndex = getSelectedIndex();

  React.useEffect(() => {
    if (ref.current && ref.current.slickGoTo) {
      ref.current.slickGoTo(selectedIndex)
    }
  }, [selectedIndex]);

  if (selectedIndex === -1) {
    return null;
  }

  return (
    <View
      bannerRef={ref}
      selectedIndex={selectedIndex}
      slides={slides}
      size={size}
    />
  )
};

export default SlideShow;
