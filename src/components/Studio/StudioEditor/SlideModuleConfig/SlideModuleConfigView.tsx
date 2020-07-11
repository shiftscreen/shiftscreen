import React from 'react';
import { BasicSlidePartsFragment } from 'generated/graphql';
import SlideModuleInfo from './SlideModuleInfo';
import { Container } from './SlideModuleConfigStyle';
import SlideModuleInstanceConfig from './SlideModuleInstanceConfig';

interface Props {
  slide: BasicSlidePartsFragment;
}

const SlideModuleConfig: React.FC<Props> = ({ slide }: Props) => {
  const { appInstance } = slide;

  return (
    <Container>
      <SlideModuleInfo slide={slide}/>
      {appInstance && (
        <SlideModuleInstanceConfig instance={appInstance}/>
      )}
    </Container>
  );
};

export default SlideModuleConfig;
