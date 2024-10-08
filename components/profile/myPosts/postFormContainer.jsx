import React from "react";
import css from './postFormContainer.module.css'
import { addNewPostActionCreator } from "../../../REDUX/reducers/profileReducer";
import { connect } from "react-redux";
import MyPosts from "./MyPosts"
import CreateMyPost from './createMyPost'

const PostsForm = (props) => {

    return (
        <div className={css.postsContainer}>
            <p className={css.header}>My Posts</p>

            <CreateMyPost addNewPostActionCreator={props.addNewPostActionCreator} />
            <MyPosts value={props.profilePage.posts} />
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
    }
}

const PostFormContainer = connect(mapStateToProps, { addNewPostActionCreator, })(PostsForm);

export default PostFormContainer;


