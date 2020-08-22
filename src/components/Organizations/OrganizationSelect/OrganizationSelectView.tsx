import React from 'react';
import * as R from 'ramda';
import { Button, Card, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { generatePath } from 'react-router';
import { Link } from 'react-router-dom';
import { ErrorAlert } from 'shared';

import { Organization, useSelectOrganizationMutation, useViewerRolesQuery } from 'generated/graphql';
import { PanelTypes, Path } from 'types';

const { Option } = Select;

const OrganizationSelect: React.FC = () => {
  const { data, loading, error } = useViewerRolesQuery();
  const [selectOrganization] = useSelectOrganizationMutation();
  const roles = data?.viewer?.roles || [];
  const organizations = R.map((role) => role.organization, roles);
  const noOrganizations = organizations.length === 0;

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
    <Card loading={loading} style={{ width: 200, height: 30 }}/>
  );

  if (error || !data) return (
    <ErrorAlert error={error}/>
  );

  const path = generatePath(Path.PanelElement, {
    element: PanelTypes.PanelPath.OrganizationsList,
  });

  if (noOrganizations) return (
    <Link to={path}>
      <Button size="large" type="primary" icon={<PlusOutlined/>}>
        Stwórz organizację
      </Button>
    </Link>
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
      defaultValue={organizations[0]?.id}
      onChange={handleChange}
      disabled={noOrganizations}
      size="large"
    >
      {optionsList}
    </Select>
  );
};

export default OrganizationSelect;
