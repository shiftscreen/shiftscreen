import { SlideTypes } from 'types';
import * as R from 'ramda';

type BannerTransition = Exclude<SlideTypes.SlideTransitionType, 'none'>;

export const getBannerTransitionTypeDuration = (transition: SlideTypes.SlideTransition): [BannerTransition, number] => {
  const transitionType = R.unless<string, BannerTransition>(
    // @ts-ignore
    R.includes(R.__, ['across', 'acrossOverlay']),
    R.always('across')
  )(transition.type);

  const transitionDuration: number = R.ifElse(
    R.equals('none'),
    R.always(0),
    R.always(transition.durationMilliseconds),
  )(transition.type);

  return [transitionType, transitionDuration]
};
