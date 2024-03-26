import { AppLink } from '../../atoms/AppLink/AppLink';
import classes from './SignUpBar.module.css';

function SignUpBar() {
  const b = classes

  const clk = () => {
    return (
      <style>
        .background_window{
          backgroundColor = "#00000069"
        }
      </style>
    )
  }



  return (
    <div className={classes.SignUpBar}>
      <button onClick={clk}>Log in</button>
      <AppLink to={'/sign-up'}><button>sign up</button></AppLink>
    </div>
  )
}

export { SignUpBar };