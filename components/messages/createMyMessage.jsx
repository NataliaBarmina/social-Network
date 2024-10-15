import React from "react";
import { useForm } from "react-hook-form";
import { createFields } from "../../common/formsControls/formControls";
import css from './userMessages.module.css'

const CreateMyMessage = ({ sendMessageCreator }) => {

    const { register,
        handleSubmit,
        formState: { errors, isValid },
        reset,
    } = useForm({
        mode: "onChange"
    });

    const addNewMessage = (values) => {
        sendMessageCreator(values.myMessage);
        reset();
    }
    return (
        <form onSubmit={handleSubmit(addNewMessage)}>
            <div className={css.messagesContainer}>
                {createFields('textarea', 'myMessage', "", register, "поле обязательно к заполнению", 50, "максимальная длина 50 символов")}

                {errors.myMessage && <p style={{ color: 'red' }}>{errors.myMessage.message || 'error'}</p>}
                <button disabled={!isValid}>Send</button>
            </div>
        </form>
    )
}
export default CreateMyMessage;


