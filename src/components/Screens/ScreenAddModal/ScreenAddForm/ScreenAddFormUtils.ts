import * as Yup from 'yup';
import { NewScreenInput } from 'types';

export const initialValues: NewScreenInput = {
  title: ''
};

export const AddScreenSchema = Yup.object<NewScreenInput>().shape({
  title: Yup.string()
    .min(1, 'Tytuł powinien zawierać minimum 1 znak')
    .max(100, 'Tytuł powinien być nie dłuższy niż 100 znaków')
    .required('Tytuł jest wymagany'),
});
