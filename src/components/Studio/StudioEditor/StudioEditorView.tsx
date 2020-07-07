import React from 'react';
import { BasicSlidePartsFragment } from 'generated/graphql';

import {
  Container,
  Inner,
  PreviewContainer,
  LeftContainer,
  RightContainer,
} from './StudioEditorStyle';
import SlidePreview from './SlidePreview';
import SlideSettings from './SlideSettings';

interface Props {
  slide: BasicSlidePartsFragment | undefined;
}

interface SizeType {
  height: number;
  width: number;
}

const defaultSize: SizeType = {
  width: 100,
  height: 100,
};

const StudioEditor: React.FC<Props> = ({ slide }: Props) => {
  const containerRef = React.createRef<HTMLDivElement>();
  const [size, setSize] = React.useState<SizeType>(defaultSize);

  React.useEffect(() => {
    if (containerRef.current && size === defaultSize) {
      const height = containerRef.current.offsetHeight * (2/3);
      const width = height * (16/9);
      const newSize = { width, height };

      setSize(newSize);
    }
  }, [containerRef.current]);

  return (
    <Container ref={containerRef}>
      <Inner>
        <LeftContainer>
          <PreviewContainer style={{...size}}>
            <SlidePreview
              size={size}
              slide={slide}
            />
          </PreviewContainer>
          {slide && (
            <SlideSettings slide={slide}/>
          )}
        </LeftContainer>
        <RightContainer>

        </RightContainer>
      </Inner>
    </Container>
  );
};

export default StudioEditor;
