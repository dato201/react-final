import classes from './SignInPage.module.css';
import { AppLink } from '../../atoms/AppLink/AppLink';

const SignInPage = (props) => {

  return (
    <div className={classes.background_window}>
      <div className={classes.SignInPage}>

        <div className={classes.div}>
          <div></div>
          <h2>Log In</h2>
          <AppLink to={'/'}><i style={{ color: '#213547' }} className="fa-solid fa-xmark clk_i"></i></AppLink>
        </div>

        <input type="text" placeholder='User Name' />
        <input type="password" placeholder='password' />
        <button>submit</button>
      </div>
    </div>
  )
}

export { SignInPage };