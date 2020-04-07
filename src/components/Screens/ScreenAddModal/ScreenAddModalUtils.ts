import gql from 'graphql-tag';

export const ADD_SCREEN = gql`
    mutation AddScreen($values: NewScreenInput!) {
        addScreen(newScreenData: $values) {
            id
            createdAt
            updatedAt
            title
            isActive
        }
    }
`;
