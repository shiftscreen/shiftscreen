import * as Yup from 'yup';
import { UpdateScreenInput } from 'types';

export const UpdateScreenSchema = Yup.object<UpdateScreenInput>().shape({
  title: Yup.string()
    .min(1, 'Tytuł powinien zawierać minimum 1 znak')
    .max(100, 'Tytuł powinien być nie dłuższy niż 100 znaków')
    .required('Pole jest wymagane'),
});
