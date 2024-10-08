import React from "react";

import ProfileViewContainer from "./profileView/profileViewContainer";
import PostFormContainer from "./myPosts/postFormContainer";

const Profile = (props) => {
    return (
        <div style={{ backgroundColor: 'rgb(180, 209, 210)' }}>
            <ProfileViewContainer />
            <PostFormContainer />
        </div >
    )
}

export default Profile;