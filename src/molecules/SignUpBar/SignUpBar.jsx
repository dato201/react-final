import { AppLink } from '../../atoms/AppLink/AppLink';
import classes from './SignUpBar.module.css';


function SignUpBar() {
  return (
    <>
      <div className={classes.SignUpBar}>
        <AppLink to={'/log-in'}><button >Log in</button></AppLink>
        <AppLink to={'/sign-up'}><button>sign up</button></AppLink>
      </div>
    </>
  )
}

export { SignUpBar };