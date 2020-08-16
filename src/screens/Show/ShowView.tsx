import React from 'react';
import { BasicSlidePartsFragment } from 'generated/graphql';
import { useWindowDimensions } from 'utils';
import { Show as SlideShow } from 'components/Slides';
import { Container } from './ShowStyle';
import * as R from 'ramda';
import { Module } from '../../modules/types';
import modules from '../../modules';

interface Props {
  slides: BasicSlidePartsFragment[];
}

const ShowView: React.FC<Props> = ({ slides }) => {
  const windowDimensions = useWindowDimensions();
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
  const selectedSlide = slides[selectedIndex];
  const module = R.find<Module>(
    R.propEq('id', selectedSlide?.appInstance?.appId)
  )(modules);
  const blockDuration = module?.blockDuration;

  React.useEffect(() => {
    if (!blockDuration) {
      setTimeout(() => {
        setSelectedIndex((selectedIndex + 1) % slides.length)
      }, selectedSlide.durationSeconds * 1000)
    }
  }, [selectedSlide]);

  const handleEnd = () => (
    setSelectedIndex((selectedIndex + 1) % slides.length)
  );

  return (
    <Container style={{ ...windowDimensions }}>
      <SlideShow
        size={windowDimensions}
        slides={slides}
        selectedId={selectedSlide.id}
        onEnd={handleEnd}
      />
    </Container>
  );
};

export default ShowView;
