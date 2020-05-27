import React from 'react';
import { Avatar } from 'antd';

import { getAvatarColor } from './OrganizationAvatarUtils';

interface Props {
  title: string;
}

const OrganizationAvatar: React.FC<Props> = ({ title }: Props) => {
  const text = title[0].toUpperCase();
  const backgroundColor = getAvatarColor(title);

  return (
    <Avatar
      shape="square"
      size="large"
      style={{ backgroundColor }}
    >
      {text}
    </Avatar>
  );
};

export default OrganizationAvatar;
