import React from 'react';
import { Card, Select } from 'antd';
import { useMutation } from '@apollo/react-hooks';
import { useViewerRolesQuery, Organization } from 'generated/graphql';
import { ErrorAlert } from 'shared';
import * as R from 'ramda';

import { SELECT_ORGANIZATION_MUTATION } from './OrganizationSelectUtils';

const { Option } = Select;

const OrganizationSelect: React.FC = () => {
  const { data, loading, error } = useViewerRolesQuery();
  const [toggleTodo] = useMutation(SELECT_ORGANIZATION_MUTATION);
  const roles = data?.viewer?.roles || [];
  const organizations = R.map((role) => role.organization, roles);

  const handleChange = (id: string) => (
    toggleTodo({
      variables: { id }
    })
  );

  if (loading) return (
    <Card loading={loading}/>
  );

  if (error || !data) return (
    <ErrorAlert error={error}/>
  );

  const toOption = (organization: Organization): React.ReactElement => (
    <Option
      key={organization.id}
      value={organization.id}
    >
      <b>Organizacja: </b> {organization.title}
    </Option>
  );
  const optionsList = R.map(toOption, organizations);

  return (
    <Select
      defaultValue={organizations[0].id}
      onChange={handleChange}
      size="large"
    >
      {optionsList}
    </Select>
  )
};

export default OrganizationSelect;
