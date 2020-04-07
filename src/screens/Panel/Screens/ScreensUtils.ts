import gql from 'graphql-tag';

export const VIEWER_ROLES = gql`
    query ViewerRoles{
        viewer {
            id
            roles {
                id
                createdAt
                updatedAt
                permissionType
                screen {
                    createdAt
                    updatedAt
                    title
                    isActive
                }
            }
        }
    }
`;
