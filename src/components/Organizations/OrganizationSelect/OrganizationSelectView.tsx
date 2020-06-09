import React from 'react';
import { Card, Select } from 'antd';
import { useMutation } from '@apollo/react-hooks';
import { useViewerRolesQuery, Organization, useSelectOrganizationMutation } from 'generated/graphql';
import { ErrorAlert } from 'shared';
import * as R from 'ramda';

import { SELECT_ORGANIZATION_MUTATION } from './OrganizationSelectUtils';

const { Option } = Select;

const OrganizationSelect: React.FC = () => {
  const { data, loading, error } = useViewerRolesQuery();
  const [selectOrganization] = useSelectOrganizationMutation();
  const roles = data?.viewer?.roles || [];
  const organizations = R.map((role) => role.organization, roles);

  const handleChange = (id: string) => (
    selectOrganization({
      variables: {
        id: parseInt(id, 10),
      }
    })
  );

  React.useEffect(() => {
    if (organizations.length > 0) {
      handleChange(organizations[0].id);
    }
  }, [data]);

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
  );
};

export default OrganizationSelect;
