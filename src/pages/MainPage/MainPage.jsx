import { useEffect } from "react";
import { $api } from "../../app/config/api";
import classes from "./MainPage.module.css"

const MainPage = (props) => {

    const fetchSomthing = async () => {
        const response = await $api.get('/profile');
        console.log(response.data);
    };

    useEffect(() => {
        fetchSomthing();
    });


    return (
        <div className={classes.MainPage}>
            <h2>MainPage</h2>
        </div>
    );
};

export { MainPage };