import classes from './Header.module.css';

function Header() {

    return (
      <header className={classes.Header}>
        <a href=""><h1>syfai</h1></a>
        <div>
        <button className="">Log in</button>
        <button className="">sign up</button>
        </div>
      </header>
    )
  }
  
  export { Header };
  