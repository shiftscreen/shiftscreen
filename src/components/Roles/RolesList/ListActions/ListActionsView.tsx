import React from 'react';
import { Organization, PermissionType, RoleTypes } from 'types';
import { Button, Col, message, Modal, Row, Typography } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import * as R from 'ramda';

import { useDeleteRoleMutation, useViewerQuery } from 'generated/graphql';
import { updateCache } from './ListActionsUtils';
import { DataProxy } from 'apollo-cache';

const { confirm } = Modal;
const { Text } = Typography;

interface Props {
  role: RoleTypes.RoleUser;
  organization: Organization;
}

const ListActions: React.FC<Props> = (props: Props) => {
  const { role, organization } = props;

  return (
    <Row justify="space-between" align="middle">
      <Col>
        <DeleteAction organization={organization} role={role}/>
      </Col>
    </Row>
  );
};

const DeleteAction: React.FC<Props> = ({ role, organization }: Props) => {
  const { user, permissionType } = role;
  const { data } = useViewerQuery({ fetchPolicy: 'cache-only' });
  const isViewerRole = R.equals(data?.viewer.id, user.id);
  const isAdmin = R.equals(permissionType, PermissionType.Admin);
  const roleUser = R.join(' ', [user.firstName, user.lastName]);

  const [deleteRole, { loading }] = useDeleteRoleMutation({
    variables: {
      id: parseInt(role.id, 10),
    },
    onError: () => {
      message.error('Wystąpił błąd podczas usuwania roli');

      if (isAdmin) {
        message.info('Organizacja musi posiadać minimum jednego administratora', 10);
      }
    },
    onCompleted: () => (
      message.success(`Pomyślnie usunięto rolę`)
    ),
    update: (cache: DataProxy) => updateCache(cache, role, organization),
  });

  const title = (
    <>
      Czy na pewno chcesz usunąć rolę użytkownika&nbsp;
      <Text strong>{roleUser}</Text>?
    </>
  );

  const handleDeleteRoleClick = () => (
    confirm({
      title,
      icon: <DeleteOutlined/>,
      content: 'Tej czynności nie można cofnąć',
      okText: 'Tak',
      okType: 'danger',
      cancelText: 'Nie',
      onOk: deleteRole,
    })
  );

  return (
    <Button
      icon={<DeleteOutlined/>}
      onClick={handleDeleteRoleClick}
      loading={loading}
      disabled={isViewerRole}
      danger
    />
  );
};

export default ListActions;
