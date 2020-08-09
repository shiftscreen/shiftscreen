import * as Yup from 'yup';
import { UpdateUserInput } from 'types';

export const UserEditSchema = Yup.object<UpdateUserInput>().shape({
  email: Yup.string()
    .email('Podaj adres e-mail')
    .required('Pole jest wymagane'),
  firstName: Yup.string()
    .required('Pole jest wymagane'),
  lastName: Yup.string()
    .required('Pole jest wymagane'),
  password: Yup.string()
    .min(8, 'Podane hasło jest za krótkie')
    .max(255, 'Podane hasło jest zbyt długie')
    .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/, 'Hasło musi zawierać przynajmniej jedną małą i dużą literę oraz cyfrę'),
});
