import classes from './SignInPage.module.css';
import { AppLink } from '../../atoms/AppLink/AppLink';
import { useFormik } from 'formik';
import { $api, TOKEN_LOCAL_STORAGE_KEY } from '../../app/config/api';
import * as yup from 'yup';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userActions } from '../../app/store/model/slices/userSlice';


const validation = yup.object().shape({
  userName: yup.string().required(),
  password: yup.string().min(8, 'minimal length is 8').max(20, 'maximum length is 20').required(),
})

const SignInPage = (props) => {
  const navigation = useNavigate();
  const [authError, setAuthError] = useState(undefined);

  const dispatch = useDispatch();

  const formik = useFormik({
    validationSchema: validation,
    initialValues: {
      userName: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const response = await $api.post('/auth', {
          userName: values.userName,
          password: values.password
        })

        localStorage.setItem(TOKEN_LOCAL_STORAGE_KEY, response.data.token);

        const userProfile = await $api.get('/profile');

        if (userProfile.data) {
          dispatch(userActions.setUser(userProfile.data))
        }
        console.log(response.status);
        if (response.status === 200) {
          navigation('/');
        }
      }
      catch (e) {
        setAuthError('User Name or Password Is Incorrect');
      }
    }
  })

  const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

  const onLoginClicked = () => {
    formik.handleSubmit();
  }

  return (
    <div className={classes.background_window}>
      <div className={classes.SignInPage}>

        <div className={classes.div}>
          <div></div>
          <h2 style={{ color: '#213547' }}>Log In</h2>
          <AppLink to={'/'}><i style={{ color: '#213547' }} className="fa-solid fa-xmark clk_i"></i></AppLink>
        </div>

        <input name='userName' value={formik.values.userName} className={classNames({ 'error_input': isFormFieldInvalid('userName') })} onChange={formik.handleChange} type="text" placeholder='User Name' />
        {isFormFieldInvalid('userName') && (
          <span className={classes.error}>{formik.errors.userName}</span>
        )}
        <input name='password' value={formik.values.password} className={classNames({ 'error_input': isFormFieldInvalid('password') })} onChange={formik.handleChange} type="password" placeholder='Password' />
        {isFormFieldInvalid('password') && (
          <span className={classes.error}>{formik.errors.password}</span>
        )}
        {
          authError && (
            <h4 className={classes.errorContainer}>{authError}</h4>
          )
        }
        <button onClick={onLoginClicked}>submit</button>
      </div>
    </div>
  )
}

export { SignInPage };