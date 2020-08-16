import React from 'react';
import YouTube, { Options } from 'react-youtube';

import { ConfigType } from '../YouTubeTypes';
import { Slides } from 'constants/index';
import { getIdFromUrl } from './Utils';
import { Scaled, ScaledTypes } from 'shared';
import { useLocation } from 'react-router-dom';
import * as R from 'ramda';

interface Props {
  config: ConfigType;
  onEnd?(): void;
}

const View: React.FC<Props> = ({ config, onEnd }: Props) => {
  const location = useLocation();
  const isShow = R.includes('show', location.pathname);
  const id = getIdFromUrl(config.url);

  const size: ScaledTypes.SizeType = Slides.size.base;
  const MULTIPLIER = isShow ? 2 : 1;
  const multiply = R.curry(R.multiply(MULTIPLIER));
  const iframeSize: Record<string, string> = {
    width: multiply(size.width).toString(),
    height: multiply(size.height).toString(),
  };

  const opts: Options = {
    ...iframeSize,
    playerVars: {
      autoplay: 1,
      controls: 0,
      mute: config.mute ? 1 : 0,
    },
  };

  if (!id) {
    return null;
  }

  return (
    <div style={{...size}}>
      <Scaled {...size}>
        <div style={{
          width: multiply(size.width),
          height: multiply(size.height),
        }}>
          <YouTube
            videoId={id}
            opts={opts}
            onEnd={onEnd}
          />
        </div>
      </Scaled>
    </div>
  );
};

export default View;
