import { Logo } from '../../atoms/Logo/Logo';
import { SignUpBar } from '../../molecules/SignUpBar/SignUpBar';
import classes from './Header.module.css';

const Header = (props) => {

  return (
    <header className={classes.Header}>
      <Logo/>
      <SignUpBar/>
    </header>
  )
}

export { Header };