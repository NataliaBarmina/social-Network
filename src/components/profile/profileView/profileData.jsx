import React from "react";
import css from './profileView.module.css'

const ProfileData = ({ profile, contacts, isOwner, goToEditMode }) => {

    return (
        <div className={css.aboutUser}>
            <div className={css.marginBottom}>
                Looking for a job: {profile.lookingForAJob ? 'да' : 'нет'}</div>

            {profile.lookingForAJob &&
                <p className={css.marginBottom}>
                    My professional skill: {profile.lookingForAJobDescription}</p>}

            <div className={css.marginBottom}>About me: {profile.aboutMe}</div>

            <div>
                Contacts:
                {Object.keys(contacts).map(key => {
                    return <p key={key} className={css.contacts}>{key}: {contacts[key]}</p>
                })}
            </div>

            {/* переход к режиму редактирования: */}
            {isOwner && <button onClick={goToEditMode}>Редактировать</button>}

        </div>
    )
}
export default ProfileData;




