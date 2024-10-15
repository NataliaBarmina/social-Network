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


export const createInput = (type, placeholder, register, valueOfRequired, value, message, text) => {
    return (
        <div>
            <input type={type} placeholder={placeholder}
                {...register(type, {
                    required: valueOfRequired,
                    maxLength: {
                        value: value,
                        massage: message,
                    }
                })}>
            </input>{text}
        </div >
    )
}

export const createTextarea = (type, register, valueOfRequired, value, message) => {
    return (
        <div>
            <textarea
                {...register(type, {
                    required: valueOfRequired,
                    maxLength: {
                        value: value,
                        massage: message,
                    }
                })
                } >
            </textarea>
        </div >
    )
}

export const createFields = (componentType, type, placeholder, register, valueOfRequired, value, message, text) => {
    const registerOfFields = {
        ...register(type, {
            required: valueOfRequired,
            maxLength: {
                value: value,
                massage: message,
            }
        })
    }
    return (
        <div>
            {componentType === 'textarea'
                ? <Textarea1 registerOfFields={registerOfFields} />
                : <Input1 placeholder={placeholder} type={type} text={text} registerOfFields={registerOfFields} />}

        </div>
    )
}

const Input1 = ({ placeholder, type, text, registerOfFields }) => {
    return <div>
        <input placeholder={placeholder} type={type} {...registerOfFields} ></input>{text}
    </div>
}

const Textarea1 = ({ registerOfFields }) => {
    return <div>
        <textarea  {...registerOfFields} ></textarea>
    </div>
}

