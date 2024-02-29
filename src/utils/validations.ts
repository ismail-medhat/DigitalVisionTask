import * as Yup from 'yup';
const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const loginValidationSchema = Yup.object({
  usr: Yup.string()
    .required('Email field is required')
    .matches(emailRegExp, 'Email not valid'),
  pwd: Yup.string()
    .required('Password field is required')
    .min(8, 'Password must be at least 8 characters'),
});

export {loginValidationSchema};
