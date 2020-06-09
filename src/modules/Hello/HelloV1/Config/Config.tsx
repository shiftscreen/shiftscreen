import React from 'react';
import { ModuleConfigProps } from 'types';
import { ConfigType } from '../types';

type Props = ModuleConfigProps<ConfigType>;

const Config: React.FC<Props> = (props: Props) => {
  const { onChange } = props;

  return (
    <div>

    </div>
  );
};

export default Config;
