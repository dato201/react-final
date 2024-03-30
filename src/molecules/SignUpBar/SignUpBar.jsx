import { useDispatch, useSelector } from 'react-redux';
import { AppLink } from '../../atoms/AppLink/AppLink';
import classes from './SignUpBar.module.css';
import { getUser } from "../../app/store/model/selectors/user/userSelectors";

function SignUpBar() {
  const user2 = useSelector(getUser);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(userActions.logOut())
  }

  const user = {
    id: 7112,
    userName: "gurami",
    email: "test@gmail.com",
    password: "123d33arew",
    status: "users"
  }

  if (user) {
    return (
      <div className={classes.SignUpBar}>
        <div className={classes.avatarContainer}>
          <div>{user.userName[0].toUpperCase()}</div>
          <h3>{user.userName}</h3>
        </div>
        <button onClick={logOut}>Log out</button>
      </div>
    )
  }
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