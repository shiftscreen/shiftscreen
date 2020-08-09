import React from 'react';
import { Icon, LogoInner, LogoWrapper, Title } from './ModuleLogoStyle';
import { Module } from 'types';

interface Props {
  module: Module;
}

const ModuleLogo: React.FC<Props> = ({ module }: Props) => {
  const { icon, title } = module;

  return (
    <LogoWrapper>
      <LogoInner>
        <Icon icon={icon}/>
        <Title>
          {title}
        </Title>
      </LogoInner>
    </LogoWrapper>
  );
};

export default ModuleLogo;
