import React from 'react';
import * as R from 'ramda';
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';

import { BasicSlidePartsFragment, ScaledTypes, SlideTypes } from 'types';
import { Preview } from 'components/Slides';
import { Scaled } from 'shared';
import { getBannerTransitionTypeDuration } from './SlideShowUtils';

interface Props {
  bannerRef: any;
  size: ScaledTypes.SizeType;
  slides: BasicSlidePartsFragment[];
  selectedIndex: number;
  onEnd?(): void;
}

class SlideShow extends React.Component<Props> {
  shouldComponentUpdate(nextProps: Readonly<Props>): boolean {
    const slidesChanged = R.not(R.equals(nextProps.slides, this.props.slides));
    const sizeChanged = R.not(R.equals(nextProps.size, this.props.size));
    const selectedIndexChanged = R.not(R.equals(nextProps.selectedIndex, this.props.selectedIndex));
    return R.or(
      R.or(slidesChanged, sizeChanged),
      selectedIndexChanged,
    );
  }

  render() {
    const { bannerRef, slides, size, selectedIndex, onEnd } = this.props;

    const selectedSlide = slides[selectedIndex];
    const transition: SlideTypes.SlideTransition = selectedSlide.transition;
    const [type, duration] = getBannerTransitionTypeDuration(transition);

    const toElement = (slide: BasicSlidePartsFragment) => (
      <Element key={slide.id}>
        <TweenOne>
          <Scaled key={slide.id} {...size}>
            <Preview
              slide={slide}
              onEnd={onEnd}
            />
          </Scaled>
        </TweenOne>
      </Element>
    );
    const list = R.map(toElement, slides);

    return (
      <BannerAnim
        ref={bannerRef}
        type={type}
        duration={duration}
        thumb={false}
        arrow={false}
        dragPlay={false}
        sync
      >
        {list}
      </BannerAnim>
    );
  }
}

export default SlideShow;
