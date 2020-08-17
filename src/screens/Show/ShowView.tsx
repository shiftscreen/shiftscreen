import React from 'react';
import * as R from 'ramda';
import { BasicSlidePartsFragment } from 'generated/graphql';
import { useWindowDimensions } from 'utils';
import { Show as SlideShow } from 'components/Slides';
import { Container } from './ShowStyle';
import { Module } from 'types';
import modules from 'modules';

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

  const getNextIndex = () => (
    (selectedIndex + 1) % slides.length
  );

  React.useEffect(() => {
    if (!blockDuration) {
      const durationMiliseconds = selectedSlide.durationSeconds * 1000;

      setTimeout(() => {
        setSelectedIndex(getNextIndex())
      }, durationMiliseconds)
    }
  }, [selectedSlide]);

  const handleEnd = () => (
    setSelectedIndex(getNextIndex())
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
