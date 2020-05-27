import { gql } from 'apollo-boost';

export const SELECT_ORGANIZATION_MUTATION = gql`
    mutation SelectOrganization($id: Int!) {
        selectOrganization(id: $id) @client
    }
`;
