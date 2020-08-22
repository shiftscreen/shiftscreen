import React from 'react';
import { Module, PanelTypes, Path } from 'types';
import { Link } from 'react-router-dom';
import { generatePath } from 'react-router';

import { Container } from './ModuleCardStyle';
import { ModuleLogo } from 'shared';

interface Props {
  module: Module;
  onClick?(module: Module): void;
  disableLink?: boolean;
}

const ModuleCard: React.FC<Props> = ({
  module,
  onClick,
  disableLink = false,
}: Props) => {
  const { id, color } = module;

  const path = generatePath(Path.PanelElement, {
    element: PanelTypes.PanelPath.ModuleInstances,
    id,
  });

  const link = disableLink ? '#' : path;

  const handleClick = () => {
    if (onClick !== undefined) {
      onClick(module)
    }
  };

  return (
    <Link to={link} onClick={handleClick}>
      <Container style={{ backgroundColor: color }}>
        <ModuleLogo module={module}/>
      </Container>
    </Link>
  );
};

export default ModuleCard;
