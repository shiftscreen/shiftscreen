import React from 'react';
import * as R from 'ramda';
import { IconName } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { generatePath, useLocation } from 'react-router-dom';

import { Path } from 'types';
import { Link, LinkIconWrapper, LinkTitle } from './MenuItemStyle';

interface Props {
  iconname: IconName;
  title: string;
  element: string;
  selectedPath: string;
}

const getLink = (element: string) => (
  generatePath(Path.PanelElement, { element })
);

const MenuItem: React.FC<Props> = ({ iconname, title, element, selectedPath }) => {
  let location = useLocation();

  const selected = R.includes(selectedPath, location.pathname);
  const className = selected ? 'selected' : '';
  const to = getLink(element);

  return (
    <Link to={to} className={className}>
      <LinkIconWrapper>
        <FontAwesomeIcon icon={iconname}/>
      </LinkIconWrapper>
      <LinkTitle>
        {title}
      </LinkTitle>
    </Link>
  );
}

export default MenuItem;
