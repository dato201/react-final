import classes from "./Posts.module.css";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { cartActions } from "../../app/store/model/slices/postSlice";

const Posts = (props) => {
    const { posts } = props;
    const dispatch = useDispatch();

    const onCartAdd = () => {
        dispatch(cartActions.addPosts(posts));
    }

    return (
        <div className={classes.Posts}>
            <h2 className={classes.userName}>{posts.userName}</h2>
            <p className={classes.text}>{posts.text}</p>
        </div>
    );
};

Posts.propTypes = {
    posts: PropTypes.object,
}

export { Posts };