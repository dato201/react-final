import { AppLink } from '../../atoms/AppLink/AppLink';
import classes from './SignUpPage.module.css';

const SignUpPage = (props) => {
    // {
    //     "userName": "gurami",
    //     "email": "",
    //     "password": "123d33e",
    //     "age": 27,
    //     "id": 7112,
    //     "status": "users"
    //   },
  return (
    <div className={classes.SignUpPage}>
        <h1 className={classes.h1}>Sign Up</h1>
        <AppLink to={'/'}><i className="fa-solid fa-arrow-right-to-bracket"></i> Back home</AppLink>
        <input type="text" placeholder='user name'/>
        <input type="email" placeholder='email'/>
        <input type="password" placeholder='password'/>
        <button className={classes.submit}>submit</button>
    </div>
  )
}

export { SignUpPage };