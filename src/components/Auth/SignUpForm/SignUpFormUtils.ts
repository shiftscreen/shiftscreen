import * as Yup from 'yup';
import { NewUserInput } from 'types';

export const initialValues: NewUserInput = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
};

export const SignInSchema = Yup.object<NewUserInput>().shape({
  email: Yup.string()
    .email('W polu powinien znajdować się email')
    .required('Pole jest wymagane'),
  password: Yup.string()
    .min(8, 'Podane hasło jest za krótkie')
    .max(255, 'Podane hasło jest zbyt długie')
    .required('Pole jest wymagane'),
  firstName: Yup.string()
    .required('Pole jest wymagane'),
  lastName: Yup.string()
    .required('Pole jest wymagane'),
});
