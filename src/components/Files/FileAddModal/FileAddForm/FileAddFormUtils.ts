import * as Yup from 'yup';
import { NewFileInput } from 'types';

export const initialValues: NewFileInput = {
  title: '',
  file: undefined
};

export const AddFileSchema = Yup.object<NewFileInput>().shape({
  title: Yup.string()
    .min(1, 'Tytuł powinien zawierać minimum 1 znak')
    .max(100, 'Tytuł powinien być nie dłuższy niż 100 znaków')
    .required('Tytuł jest wymagany'),
  file: Yup.mixed()
    .required('Plik jest wymagany'),
});
