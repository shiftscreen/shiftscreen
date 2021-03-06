import React from 'react';
import { Organization, useUpdateOrganizationMutation } from 'generated/graphql';
import { message, Typography } from 'antd';
import dayjs from 'dayjs';

import { Card, Descriptions, TitleWrapper } from './OrganizationInfoStyle';
import { handleError } from 'utils';

const { Title, Text } = Typography;

interface Props {
  organization: Organization;
}

const OrganizationInfo: React.FC<Props> = ({ organization }: Props) => {
  const { id, title, createdAt, updatedAt } = organization;
  const [updateOrganization] = useUpdateOrganizationMutation({
    onError: (error) => handleError(error, 'Wystąpił błąd podczas próby aktualizacji organizacji'),
  });
  const createdAtText = dayjs(createdAt).format('LLLL');
  const updatedAtText = dayjs(updatedAt).format('LLLL');

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
      handleError(e);
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
