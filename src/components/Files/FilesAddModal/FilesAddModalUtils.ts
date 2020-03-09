import * as Yup from 'yup';
import { NewFileInput } from '../../../models/database';

export const initialValues: NewFileInput = {
  title: '',
  file: null
};

export const AddFileSchema = Yup.object<NewFileInput>().shape({
  title: Yup.string()
    .min(1, 'Zbyt krótki')
    .max(255, 'Zbyt długi')
    .required('Pole wymagane'),
  file: Yup.mixed()
    .required('Pole wymagane'),
});
