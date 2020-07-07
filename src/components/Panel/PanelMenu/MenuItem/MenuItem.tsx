import React from 'react';
import { Link, LinkIconWrapper, LinkTitle } from './MenuItemStyle';
import { IconName } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface MenuItemData {
  iconname: IconName;
  title: string;
}

type MenuItemProps = MenuItemData & { to: string; };

const MenuItem: React.FC<MenuItemProps> = ({ iconname, title, to }: MenuItemProps) => (
  <Link to={to} activeClassName="selected">
    <LinkIconWrapper>
      <FontAwesomeIcon icon={iconname}/>
    </LinkIconWrapper>
    <LinkTitle>
      {title}
    </LinkTitle>
  </Link>
);

export default MenuItem;
