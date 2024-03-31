import { useEffect } from "react";
import { $api } from "../../app/config/api";
import classes from "./MainPage.module.css"
import { Posts } from "../../molecules/Posts/Posts";

const MainPage = (props) => {

    const fetchSomthing = async () => {
        const response = await $api.get('/posts');
        console.log(response.data);
    };

    useEffect(() => {
        fetchSomthing();
    });
    const products2  = fetchSomthing();

    return (
        <div className={classes.MainPage}>
            <h2>MainPage</h2>
            <div className={classes.products}>
                {/* {products2?.map((posts) => {
                    return (
                        <Posts key={posts.id} posts={posts} />
                    )
                })} */}
            </div>
        </div>
    );
};

export { MainPage };