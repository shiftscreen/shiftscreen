import React from 'react';

import { Container, ContainerProps } from './ScaledStyle';

interface Props {
  height: number;
  width: number;
  children: JSX.Element;
}

const Scaled: React.FC<Props> = ({ height, width, children }: Props) => {
  let childrenRef = React.createRef<HTMLElement>();
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
  }, [childrenRef.current]);

  return (
    <Container {...props} ref={childrenRef}>
      {children}
    </Container>
  );
};

export default Scaled;
