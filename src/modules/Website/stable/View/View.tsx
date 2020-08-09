import React from 'react';
import * as R from 'ramda';

import { Slides } from 'constants/index';
import { Scaled } from 'shared';
import { ScaledTypes } from 'types';
import { ConfigType } from '../WebsiteTypes';
import { IFrame } from './Style';

interface Props {
  config: ConfigType;
}

const View: React.FC<Props> = ({ config }: Props) => {
  const { url } = config;

  const size: ScaledTypes.SizeType = Slides.size.base;
  const MULTIPLIER = 1.5;
  const multiply = R.curry(R.multiply(MULTIPLIER));
  const iframeSize: Record<string, string> = {
    width: multiply(size.width).toString(),
    height: multiply(size.height).toString(),
  };

  return (
    <div {...size}>
      <Scaled {...size}>
        <IFrame
          url={url}
          scrolling="no"
          {...iframeSize}
        />
      </Scaled>
    </div>
  );
};

export default View;
