import React from 'react';
import { Organization, RolesTypes } from 'types';
import { Button, Col, List, Row, Skeleton, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { Table } from './RolesListStyle';
import { columns } from './RolesListUtils';
import { useOrganizationRolesQuery } from 'generated/graphql';
import { AddModal } from 'components/Roles';
import { ErrorAlert } from 'shared';

const { Text } = Typography;

interface Props {
  organization: Organization;
}

const RolesList: React.FC<Props> = ({ organization }: Props) => {
  const { data, loading, error } = useOrganizationRolesQuery({
    variables: {
      organizationId: parseInt(organization.id, 10),
    }
  });
  const roles: RolesTypes.RoleUser[] = data?.organization.roles || [];
  const title = () => (
    <RolesListTitle organization={organization}/>
  );

  if (loading) return (
    <List
      size="small"
      dataSource={[1, 2, 3]}
      pagination={false}
      renderItem={() => (
        <List.Item>
          <Skeleton loading active/>
        </List.Item>
      )}
      bordered
    />
  );

  if (error || !data) return (
    <ErrorAlert error={error}/>
  );

  return (
    <Table
      rowKey={(role: RolesTypes.RoleUser) => role.id}
      columns={columns(organization)}
      dataSource={roles}
      title={title}
      pagination={false}
      bordered
    />
  );
};

const RolesListTitle: React.FC<Props> = ({ organization }: Props) => {
  const [visible, setVisible] = React.useState<boolean>(false);

  const handleClick = (): void => (
    setVisible(true)
  );

  const handleCreate = async (values: any) => {
    setVisible(false);
  };

  const handleClose = () => (
    setVisible(false)
  );

  return (
    <Row justify="space-between" align="middle">
      <Col>
        <Text style={{ fontSize: '16px' }} strong>
          Role
        </Text>
      </Col>
      <Col>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={handleClick}
        >
          Dodaj
        </Button>
        <AddModal
          organization={organization}
          onCreate={handleCreate}
          onClose={handleClose}
          visible={visible}
        />
      </Col>
    </Row>
  );
};

export default RolesList;
