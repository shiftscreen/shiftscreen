import React from 'react';
import * as R from 'ramda';
import { BasicSlidePartsFragment } from 'generated/graphql';
import { useWindowDimensions } from 'utils';
import { Show as SlideShow } from 'components/Slides';
import { Container, LogoWatermarkWrapper } from './ShowStyle';
import { Module } from 'types';
import { Logo } from 'shared';
import modules from 'modules';

interface Props {
  slides: BasicSlidePartsFragment[];
}

const ShowView: React.FC<Props> = ({ slides }) => {
  const windowDimensions = useWindowDimensions();
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
  const [lastTimeoutId, setLastTimeoutId] = React.useState<number | undefined>(undefined);
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

      const timeoutId = setTimeout(() => {
        setSelectedIndex(getNextIndex())
      }, durationMiliseconds);

      setLastTimeoutId(timeoutId);
    }
  }, [selectedSlide]);

  const handleEnd = () => {
    clearTimeout(lastTimeoutId);
    setSelectedIndex(getNextIndex());
  };

  return (
    <Container style={{ ...windowDimensions }}>
      <SlideShow
        size={windowDimensions}
        slides={slides}
        selectedId={selectedSlide.id}
        onEnd={handleEnd}
      />
      <LogoWatermarkWrapper>
        <Logo color="white" />
      </LogoWatermarkWrapper>
    </Container>
  );
};

export default ShowView;
