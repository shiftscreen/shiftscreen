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
  onClick?(module: Module): void;
  disableLink?: boolean;
}

const ModuleCard: React.FC<Props> = ({
  module,
  onClick,
  disableLink = false,
}: Props) => {
  const { id, icon, title, color } = module;

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
