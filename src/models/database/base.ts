export type ID = string | number;

export interface EntityBase {
  id: ID;
  createdAt: string;
  updatedAt: string;
}
