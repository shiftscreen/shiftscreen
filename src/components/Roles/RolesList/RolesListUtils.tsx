import React from 'react';
import { ColumnsType } from 'antd/es/table';
import { Tag, Typography } from 'antd';
import { BasicUserPartsFragment, Organization, PermissionType, RoleTypes } from 'types';
import * as R from 'ramda';
import moment from 'moment';
import ListActions from './ListActions';
import ListSelectRole from './ListSelectRole';

const { Text } = Typography;

const PermissionTag = (type: PermissionType) => (
  R.cond<any, JSX.Element>([
    [R.equals(PermissionType.Admin), R.always(<Tag color='red'>Administrator</Tag>)],
    [R.equals(PermissionType.Editor), R.always(<Tag color='orange'>Redaktor</Tag>)],
  ])(type)
);

export const columns = (organization: Organization): ColumnsType<RoleTypes.RoleUser> => ([
  {
    title: 'Imię i nazwisko',
    dataIndex: 'user',
    render: (user: BasicUserPartsFragment) => {
      const { firstName, lastName } = user;
      const fullName = R.join(' ', [firstName, lastName]);

      return (
        <Text strong>{fullName}</Text>
      );
    },
  },
  {
    title: 'E-mail',
    dataIndex: ['user', 'email'],
    render: (email: string) => (
      <a href={`mailto:${email}`}>{email}</a>
    ),
  },
  {
    title: 'Uprawnienia',
    dataIndex: '',
    render: (role: RoleTypes.RoleUser) => (
      <ListSelectRole role={role}/>
    ),
  },
  {
    title: 'Ostatnio zmodyfikowany',
    dataIndex: 'updatedAt',
    render: (date: string) => moment(date).format('LLL'),
  },
  {
    key: 'actions',
    width: '4rem',
    dataIndex: '',
    render: (role: RoleTypes.RoleUser) => (
      <ListActions role={role} organization={organization}/>
    ),
  },
]);
