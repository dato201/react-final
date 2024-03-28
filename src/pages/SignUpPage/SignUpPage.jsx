import { useDispatch } from 'react-redux';
import { AppLink } from '../../atoms/AppLink/AppLink';
import classes from './SignUpPage.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from "yup";
import { useFormValidation } from "../../app/shared/hooks/useFormValidation";
import classNames from 'classnames';

const validation = yup.object().shape({
  userName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(16).required(),
})

const SignUpPage = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    validationSchema: validation,
    initialValues: {
      userName: '',
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        const response = await $api.post('/users', values);
        setIsLoading(false);

        if (response.status === 201) {
          navigate('/sign-in')
        }
      }
      catch (e) {
        setError(e.message);
        setIsLoading(false);
      }
    }
  })

  const { isFormFieldInvalid } = useFormValidation(formik);
  if (isFormFieldInvalid('firstName')) {
    console.log("error");
  }
  return (
    <div className={classes.SignUpPage}>
      <h1 className={classes.h1}>Sign Up</h1>
      <AppLink to={'/'}><i className="fa-solid fa-arrow-right-to-bracket"></i> Back home</AppLink>
      <input type="text" name="userName" value={formik.values.userName}
        onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldInvalid('userName') })} placeholder='user name' />
      {isFormFieldInvalid('firstName') && (
        <span className={classes.error}>{formik.errors.firstName}</span>
      )}

      <input type="email" name="email" value={formik.values.email}
        onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldInvalid('email') })} placeholder='email' />

      <input type="password" name="password" value={formik.values.password}
        onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldInvalid('password') })} placeholder='password' />

      <button type='submit' className={classes.submit} onClick={() => formik.handleSubmit()}>submit</button>
    </div>
  )
}

export { SignUpPage };