import { Scalars } from 'generated/graphql';

export type ID = Scalars['ID'];

export interface EntityBase {
  id: ID;
  createdAt: string;
  updatedAt: string;
}
