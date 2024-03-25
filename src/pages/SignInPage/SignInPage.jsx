import classes from './SignInPage.module.css';

const SignInPage = (props) => {

    return (
      <div className={classes.background_window}>
        <div className={classes.SignInPage}>
            <input type="text" />
            <input type="text" />
        </div>
      </div>
    )
  }
  
  export { SignInPage };