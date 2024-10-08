import React from "react";
import css from './createMyPost.module.css'
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../../common/formsControls/formControls";

const CreateMyPost = (props) => {
    const onAddPost = (values) => {
        props.addNewPostActionCreator(values.myPost)
    }
    return (
        <div className={css.postForm}>
            <PostReduxForm onSubmit={onAddPost} />
        </div>
    )
}
export default CreateMyPost;

const Form = (props) => {
    const maxLength50 = maxLengthCreator(50)
    return (
        <form onSubmit={props.handleSubmit}>
            <Field className={css.input} name="myPost" component={Textarea} validate={[required, maxLength50]} />
            <div><button className={css.button}>SEND</button></div>
        </form>
    )
}

const PostReduxForm = reduxForm({ form: "myPost" })(Form)