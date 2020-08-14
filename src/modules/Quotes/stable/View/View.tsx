import React from 'react';
import { ConfigType } from '../QuotesTypes';

interface Props {
  config: ConfigType;
  onEnd?(): void;
}

const View: React.FC<Props> = ({ config }) => {


  return (
    <div>

    </div>
  );
};

export default View;
