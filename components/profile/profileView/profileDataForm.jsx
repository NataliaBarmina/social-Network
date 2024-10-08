import React from "react";
import { reduxForm } from "redux-form";
import { createField, Input, Textarea } from "../../../common/formsControls/formControls";
import css from "./profileView.module.css"

const ProfileForm = ({ handleSubmit, profile }) => {

    return (

        <form onSubmit={handleSubmit} >

            <div >Name: {createField("name", "fullName", [], Input)}</div>

            <div >Looking for a job: {createField(null, "lookingForAJob", [], Input, { type: "checkbox" })}</div>


            <div >My professional skills: {createField("looking for a job description", "lookingForAJobDescription", [], Textarea)}</div>

            <div>About me: {createField("about me", "aboutMe", [], Textarea)}</div>

            <div>
                Contacts:
                {Object.keys(profile.contacts).map(key => {
                    return <div key={key}> {key}: {createField("", `contacts.${key}`, [], Input)}</div> //! повторяем структуру объекта - `contacts.${key}`
                })}
            </div>

            <button>Сохранить</button>

        </form>
    )
}


const ProfileDataReduxForm = reduxForm({ form: "editProfile", destroyOnUnmount: false })(ProfileForm);//destroyOnUnmount - чтобы работал initialValues

const ProfileDataForm = ({ saveProfile, goToEditMode, profile, error, addError, ...props }) => {

    const onSubmit = (formData) => {
        saveProfile(formData);
        if (error) {
            addError(null)
        }

    }

    return (
        <div >
            <ProfileDataReduxForm profile={profile} onSubmit={onSubmit} initialValues={profile}  {...props} />
            {/* initialValues -чтобы в инпутах появлялись предыдущие значения  */}

            <Error error={error} />
        </div>
    )
}

const Error = ({ error }) => {

    return (
        <div className={css.error}>
            <div>{error}</div>
        </div>
    )
}

export default ProfileDataForm;