import * as R from 'ramda';
import { PredefinedQuotesType } from 'generated/graphql';
import { MediaTypes } from 'shared';

const IMAGES_NUMBER = 3;

const getPath = (type: string, index: number) => (
  R.join(
    '/',
    ['/images', 'quotes', type, `${type}-${index}.jpg`],
    )
);

export const getRandomImage = (type: PredefinedQuotesType): MediaTypes.MediaSource => {
  const typeString = type.toString().toLowerCase();
  const randomIndex = Math.floor(IMAGES_NUMBER * Math.random());
  const path = getPath(typeString, randomIndex);

  return {
    type: 'url',
    url: path,
  }
};
