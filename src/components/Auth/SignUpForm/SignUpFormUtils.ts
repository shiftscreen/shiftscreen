import * as Yup from 'yup';
import { NewUserInput } from 'types';

export const initialValues: NewUserInput = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  rulesAccepted: false,
};

export const SignUpSchema = Yup.object<NewUserInput>().shape({
  email: Yup.string()
    .email('Podaj adres e-mail')
    .required('Pole jest wymagane'),
  password: Yup.string()
    .min(8, 'Podane hasło jest za krótkie')
    .max(255, 'Podane hasło jest zbyt długie')
    .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/, 'Hasło musi zawierać przynajmniej jedną małą i dużą literę oraz cyfrę')
    .required('Pole jest wymagane'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Podane hasła się nie zgadzają'),
  firstName: Yup.string()
    .required('Pole jest wymagane'),
  lastName: Yup.string()
    .required('Pole jest wymagane'),
  rulesAccepted: Yup.mixed()
    .oneOf([true], 'Musisz zaakceptować regulamin'),
  recaptcha: Yup.string()
    .required('Werfyikacja jest wymagana'),
});

