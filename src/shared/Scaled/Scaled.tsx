import React from 'react';

import { Container, ContainerProps } from './ScaledStyle';
import { SizeType } from './ScaledTypes';

interface Props extends SizeType {
  children?: React.ReactNode;
}

const Scaled: React.FC<Props> = ({ height, width, children }: Props) => {
  let childrenRef = React.createRef<HTMLDivElement>();
  const [props, setProps] = React.useState<ContainerProps>();

  React.useEffect(() => {
    if (childrenRef.current) {
      const scale = Math.min(
        width / childrenRef.current.offsetWidth,
        height / childrenRef.current.offsetTop,
      );

      setProps({
        scale,
        width,
        height,
      });
    }
  }, [childrenRef.current, height, width]);

  return (
    <Container {...props} ref={childrenRef}>
      {children}
    </Container>
  );
};

export default React.memo(Scaled);
