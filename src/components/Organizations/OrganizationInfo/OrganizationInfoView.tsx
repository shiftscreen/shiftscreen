import React from 'react';
import { Organization, useUpdateOrganizationMutation } from 'generated/graphql';
import { message, Typography } from 'antd';
import moment from 'moment';

import { Card, Descriptions, TitleWrapper } from './OrganizationInfoStyle';

const { Title, Text } = Typography;

interface Props {
  organization: Organization;
}

const OrganizationInfo: React.FC<Props> = ({ organization }: Props) => {
  const { id, title, createdAt, updatedAt } = organization;
  const [updateOrganization] = useUpdateOrganizationMutation({
    onError: () => message.error('Wystąpił błąd podczas próby aktualizacji organizacji'),
  });
  const createdAtText = moment(createdAt).format('LLLL');
  const updatedAtText = moment(updatedAt).format('LLLL');

  const handleTitleEdit = async (title: string) => {
    try {
      await updateOrganization({
        variables: {
          id: parseInt(id, 10),
          values: { title },
        },
        optimisticResponse: {
          __typename: 'Mutation',
          updateOrganization: {
            ...organization,
            title,
            __typename: 'Organization',
          }
        }
      })
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Card title={(
      <Text strong>Podstawowe informacje</Text>
    )}>
      <TitleWrapper>
        <Text editable={{ onChange: handleTitleEdit }}>{title}</Text>
      </TitleWrapper>
      <Descriptions bordered>
        <Descriptions.Item label="Utworzono" span={3}>
          {createdAtText}
        </Descriptions.Item>
        <Descriptions.Item label="Zmodyfikowano" span={3}>
          {updatedAtText}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

export default OrganizationInfo;
