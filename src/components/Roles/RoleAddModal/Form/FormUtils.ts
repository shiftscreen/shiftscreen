import * as Yup from 'yup';
import { NewRoleInput } from 'types';

export const AddRoleSchema = Yup.object<NewRoleInput>().shape({
  permissionType: Yup.mixed().required('Pole jest wymagane'),
  userId: Yup.number().notOneOf([0]).required('Pole jest wymagane'),
  organizationId: Yup.number().required('Pole jest wymagane'),
});
