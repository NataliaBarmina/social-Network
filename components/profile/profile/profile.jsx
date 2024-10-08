import React from "react";
// import WallPaper from "../wallPaper/wallPaper";
import css from './profile.module.css'
import ProfileViewContainer from "../profileView/profileViewContainer";
import PostFormContainer from "../myPosts/postFormContainer";

const Profile = (props) => {
    return (
        <div className={css.container}>
            {/* <WallPaper /> */}
            <ProfileViewContainer />
            <PostFormContainer />
        </div >
    )
}

export default Profile;