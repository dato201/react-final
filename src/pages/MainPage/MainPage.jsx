import { SignInPage } from "../SignInPage/SignInPage";
import classes from "./MainPage.module.css"

const MainPage = (props) => {

    return (
        <>
            <div className={classes.MainPage}>
                <h2>MainPage</h2>
            </div>
            <SignInPage />
        </>
    );
};

export { MainPage };