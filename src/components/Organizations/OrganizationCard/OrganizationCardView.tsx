import React from 'react';
import { Card, Typography } from 'antd';
import { RolesTypes } from 'types';

import { Avatar } from 'components/Organizations';
import { Container, Wrapper } from './OrganizationCardStyle';
import CardActions from './CardActions';

const { Title } = Typography;

interface Props {
  role: RolesTypes.RoleOrganization;
}

const OrganizationCard: React.FC<Props> = ({ role }: Props) => {
  const { organization } = role;
  const { title } = organization;

  const actions = CardActions({ role });

  return (
    <Card actions={actions}>
      <Container>
        <Wrapper>
          <Avatar title={title}/>
        </Wrapper>
        <Wrapper>
          <Title level={4}>{title}</Title>
        </Wrapper>
      </Container>
    </Card>
  );
};

export default OrganizationCard;
