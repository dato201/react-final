import { AppLink } from '../../atoms/AppLink/AppLink';
import classes from './Aside.module.css';

function Aside() {

    return (
        <aside className={classes.Aside}>
            <div className={classes.aside_div}>
                <h1 className={classes.mainTxt2}>main board</h1>
                <nav className={classes.aside_nav}>
                    <AppLink to={'/'}><h2 className={classes.nav_text}>Home</h2></AppLink>
                    <AppLink to={'/profile'}><h2 className={classes.nav_text}>profile</h2></AppLink>
                    <AppLink to={'/about-us'}><h2 className={classes.nav_text}>About us</h2></AppLink>
                </nav>
            </div>

        </aside>
    )
}

export { Aside };
