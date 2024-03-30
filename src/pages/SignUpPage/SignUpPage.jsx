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

  const formik = useFormik({
    validationSchema: validation,
    initialValues: {
      userName: '',
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      try {
        const response = await $api.post('/users', values);

        if (response.status === 201) {
          navigate('/sign-in')
        }
      }
      catch (e) {
        setError(e.message);
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
      <input name='userName' value={formik.values.userName} className={classNames({ 'error_input2': isFormFieldInvalid('userName') })} onChange={formik.handleChange} type="text" placeholder='User Name' />
      {isFormFieldInvalid('userName') && (
        <span className={classes.error}>{formik.errors.userName}</span>
      )}

      <input name='email' value={formik.values.email} className={classNames({ 'error_input2': isFormFieldInvalid('email') })} onChange={formik.handleChange} type="email" placeholder='email' />
      {isFormFieldInvalid('email') && (
        <span className={classes.error}>{formik.errors.email}</span>
      )}

      <input name='password' value={formik.values.password} className={classNames({ 'error_input2': isFormFieldInvalid('password') })} onChange={formik.handleChange} type="password" placeholder='Password' />
      {isFormFieldInvalid('password') && (
        <span className={classes.error}>{formik.errors.password}</span>
      )}

      {error && (
        <div className={classes.errorContainer}>{error}</div>
      )}

      <button className={classes.submit} onClick={() => formik.handleSubmit()}>submit</button>
    </div>
  )
}

export { SignUpPage };