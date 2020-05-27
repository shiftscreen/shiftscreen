import * as Yup from 'yup';
import { NewOrganizationInput } from 'types';

export const initialValues: NewOrganizationInput = {
  title: '',
};

export const AddOrganizationSchema = Yup.object<NewOrganizationInput>().shape({
  title: Yup.string()
    .min(1, 'Tytuł powinien zawierać minimum 1 znak')
    .max(100, 'Tytuł powinien być nie dłuższy niż 100 znaków')
    .required('Pole jest wymagane'),
});
