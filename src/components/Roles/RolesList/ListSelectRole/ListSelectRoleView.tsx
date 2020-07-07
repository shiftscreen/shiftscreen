import React from 'react';
import { PermissionType, RoleTypes, useViewerQuery } from 'types';
import { Select } from 'antd';
import * as R from 'ramda';
import { useUpdateRoleMutation } from 'generated/graphql';

const { Option } = Select;

interface Props {
  role: RoleTypes.RoleUser;
}

const ListSelectRole: React.FC<Props> = ({ role }: Props) => {
  const { id, user, permissionType } = role;
  const { data } = useViewerQuery({ fetchPolicy: 'cache-only' });
  const [updateRole] = useUpdateRoleMutation();
  const isViewerRole = R.equals(data?.viewer.id, user.id);

  const handleChange = (type: PermissionType) => (
    updateRole({
      variables: {
        id: parseInt(id, 10),
        values: {
          permissionType: type,
        }
      },
      optimisticResponse: {
        __typename: 'Mutation',
        updateRole: {
          ...role,
          permissionType: type,
          __typename: 'Role',
        }
      }
    })
  );

  return (
    <Select
      defaultValue={permissionType}
      style={{ width: 150 }}
      onChange={handleChange}
      disabled={isViewerRole}
    >
      <Option value={PermissionType.Admin}>Administrator</Option>
      <Option value={PermissionType.Editor}>Redator</Option>
    </Select>
  );
};

export default ListSelectRole;
