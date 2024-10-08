import React, { useState } from "react";
import css from './profileView.module.css'
import Preloader from "../../../common/preloader/preloader";
import ProfileDataForm from "./profileDataForm";
import ProfileStatusWithHooks from "./profileStatusWithHooks";
import ProfilePhoto from "./profilePhoto";
import ProfileData from "./profileData";

const ProfileViewWithHooks = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile, error, addError }) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />
    }

    return (
        <div>
            <NameAndStatusOfUsers profile={profile} status={status} updateStatus={updateStatus} />

            <div className={css.container}>
                <ProfilePhoto profile={profile} savePhoto={savePhoto} isOwner={isOwner} />

                {!editMode ?
                    <ProfileData
                        goToEditMode={() => { setEditMode(true) }}
                        profile={profile}
                        contacts={profile.contacts}
                        isOwner={isOwner} /> :
                    < ProfileDataForm
                        profile={profile}
                        saveProfile={saveProfile}
                        goToEditMode={() => { setEditMode(false) }}
                        error={error}
                        addError={addError}
                    />
                }


            </div>
        </div>
    )
}
export default ProfileViewWithHooks;

const NameAndStatusOfUsers = ({ profile, status, updateStatus }) => {
    return (
        <div className={css.nameContainer}>
            <p className={css.fullName}>{profile.fullName}</p>

            <div >
                <div className={css.status}><pre>Status: </pre></div>
                <div className={css.status}>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                </div>
            </div>
        </div>
    )
}