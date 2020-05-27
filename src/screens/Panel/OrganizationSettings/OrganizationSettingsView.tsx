import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Col, Row } from 'antd';

import { Info as OrganizationInfo } from 'components/Organizations';
import { List as RolesList } from 'components/Roles';
import { useOrganizationByIdQuery } from 'generated/graphql';

const OrganizationSettings: React.FC = () => {
 const history = useHistory();
 const { id = '' } = useParams();
 const { data, error } = useOrganizationByIdQuery({
   variables: {
     id: parseInt(id, 10),
   },
   fetchPolicy: 'cache-only',
 });

 if (!data || error) {
  history.push('/panel/organizations');
  return null;
 }

 return (
   <Row gutter={[24, 24]}>
    <Col span="6">
     <OrganizationInfo organization={data.organization} />
    </Col>
    <Col span="18">
     <RolesList organization={data.organization}/>
    </Col>
   </Row>
 );
};

export default OrganizationSettings;
