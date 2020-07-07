import React from 'react';
import { Module, Path, PanelTypes } from 'types';
import { Link } from 'react-router-dom';
import { generatePath } from 'react-router';

import {
  Container,
  LogoWrapper,
  LogoInner,
  Title,
  Icon,
} from './ModuleCardStyle';

interface Props {
  module: Module;
}

const ModuleCard: React.FC<Props> = ({ module}: Props) => {
  const { id, icon, title, color } = module;

  const link = generatePath(Path.PanelElement, {
    element: PanelTypes.PanelPath.ModuleInstances,
    id,
  });

  return (
    <Link to={link}>
      <Container
        style={{
          backgroundColor: color,
        }}
      >
        <LogoWrapper>
          <LogoInner>
            <Icon icon={icon}/>
            <Title>
              {title}
            </Title>
          </LogoInner>
        </LogoWrapper>
      </Container>
    </Link>
  );
};

export default ModuleCard;
