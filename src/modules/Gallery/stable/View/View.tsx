import React from 'react';
import { ConfigType } from '../GalleryTypes';
import { Image } from './Style';
import { SlideLoading } from 'shared';

interface Props {
  config: ConfigType;
  onEnd?(): void;
}

const View: React.FC<Props> = ({ config }) => {
  const { photosList } = config;
  const randomIndex = Math.floor(photosList.length * Math.random());
  const randomPhoto = photosList[randomIndex];

  if (!randomPhoto?.image) return (
    <SlideLoading/>
  );

  return (
    <Image
      type="image"
      source={randomPhoto.image}
    />
  );
};

export default View;
