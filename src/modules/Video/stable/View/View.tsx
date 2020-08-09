import React from 'react';

import { ConfigType } from '../VideoTypes';
import { Slides } from 'constants/index';
import { MediaView, ScaledTypes } from 'shared';

interface Props {
  config: ConfigType;
  onEnd?(): void;
}

const View: React.FC<Props> = ({ config, onEnd }: Props) => {
  const { file, mute } = config;
  const size: ScaledTypes.SizeType = Slides.size.base;

  if (!file) {
    return null;
  }

  return (
    <div style={{...size}}>
      <MediaView
        type='video'
        muted={mute}
        source={config.file}
        onVideoEnded={onEnd}
        style={{ ...size }}
      />
    </div>
  );
};

export default View;
