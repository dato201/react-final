import { useMemo, useState } from 'react';
import classes from './SignInPage.module.css';

const SignInPage = (props) => {
  const [style, setStyle] = useState("")

  const clk = () => {
    setStyle("none")
  }

  const myStyle = {
    display: `${style}`
  };

  window.onclick = function () {
    setStyle("none")
  }

  return (
    <div style={myStyle} className={classes.background_window}>
      <div className={classes.SignInPage}>

        <div className={classes.div}>
          <div></div>
          <h2>Log In</h2>
          <i onClick={clk} className="fa-solid fa-xmark clk_i"></i>
        </div>

        <input type="text" placeholder='User Name' />
        <input type="password" placeholder='password' />
        <button>submit</button>
      </div>
    </div>
  )
}

export { SignInPage };