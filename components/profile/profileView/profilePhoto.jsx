import React from "react";
import css from './profileView.module.css'
import userPhoto from '../../../REDUX/pictures/man.png'

const ProfilePhoto = ({ profile, savePhoto, isOwner }) => {

    const onMainPhotoSelected = (event) => { // выбираем фото и сохраняем
        if (event.target.files.length) {
            savePhoto(event.target.files[0]);
        }
    }

    return (
        <div className={css.photo}>
            <img src={profile.photos.small || userPhoto} alt="#"></img>
            {isOwner && <input type="file" onChange={onMainPhotoSelected} />}
        </div>
    )
}
export default ProfilePhoto;