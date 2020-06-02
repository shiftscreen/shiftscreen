import React from 'react';
import { Tag } from 'antd';
import { green, red } from '@ant-design/colors';
import * as R from 'ramda';
import { PermissionType, ScreenTypes } from 'types';

import { BottomContainer, Container, Icon, Inner, Title, TopContainer, } from './ScreenCardStyle';
import CardActions from './CardActions';

interface Props {
  screen: ScreenTypes.ScreenViewerRole;
}

const ScreenCard: React.FC<Props> = ({ screen }: Props) => {
  const { title, isActive, color, viewerRole } = screen;

  const isViewerAdmin = R.equals(viewerRole.permissionType, PermissionType.Admin);

  const handleClick = () => {
    console.log('click')
  };

  const style = {
    backgroundColor: color,
  };

  return (
    <Container
      onClick={handleClick}
      style={style}
    >
      <Icon icon="tv"/>
      <Inner>
        <TopContainer>
          <IsActive isActive={isActive}/>
        </TopContainer>
        <BottomContainer>
          <Title>
            {title}
          </Title>
          {isViewerAdmin && (
            <CardActions screen={screen}/>
          )}
        </BottomContainer>
      </Inner>
    </Container>
  );
};

const IsActive: React.FC<{ isActive: boolean }> = ({ isActive }) => (
  R.cond<boolean, React.ReactElement>([
    [R.and(true), R.always(<Tag color={green[4]}>Aktywny</Tag>)],
    [R.T, R.always(<Tag color={red[4]}>Nieaktywny</Tag>)],
  ])(isActive)
);

export default ScreenCard;
