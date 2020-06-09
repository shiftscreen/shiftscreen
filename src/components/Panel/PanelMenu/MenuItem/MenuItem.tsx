import React from 'react';
import { LinkProps } from 'react-router-dom';
import { Link, LinkIconWrapper, LinkTitle } from './MenuItemStyle';
import { IconName } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface MenuItemData {
  iconname: IconName;
  title: string;
}

type MenuItemProps = MenuItemData & LinkProps;

const MenuItem: React.FC<MenuItemProps> = (props: MenuItemProps) => {
  const { iconname, title } = props;

  return (
    <Link {...props} activeClassName="selected" exact>
      <LinkIconWrapper>
        <FontAwesomeIcon icon={iconname}/>
      </LinkIconWrapper>
      <LinkTitle>
        {title}
      </LinkTitle>
    </Link>
  );
};

export default MenuItem;
