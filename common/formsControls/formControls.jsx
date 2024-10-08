import React from "react";
import css from './formControls.module.css'
import { Field } from "redux-form";

const FormControl = ({ children, meta: { touched, error } }) => {

    const hasError = touched && error;

    return (
        <div className={(hasError ? css.error : "")}>
            <div>{children}</div>
            <div>{hasError && <span>{error}</span>}</div>
        </div>
    )
}

export const Textarea = (props) => {
    const { input, ...restProps } = props;
    return <FormControl {...props}><textarea {...input} {...restProps}></textarea></FormControl>
}

export const Input = (props) => {
    const { input, ...restProps } = props;
    return <FormControl {...props}><input {...input} {...restProps}></input></FormControl>
}


export const createField = (placeholder, name, validators, component, props = {}, text = '') => {
    return <div>
        <Field placeholder={placeholder} name={name} validate={validators} component={component} {...props} />{text}
    </div>
}