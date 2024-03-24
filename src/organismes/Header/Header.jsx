import { Logo } from '../../atoms/Logo/Logo';
import { SignUpBar } from '../../molecules/SignUpBar/SignUpBar';
import classes from './Header.module.css';

function Header() {

  return (
    <header className={classes.Header}>
      <Logo/>
      <SignUpBar/>
    </header>
  )
}

export { Header };
