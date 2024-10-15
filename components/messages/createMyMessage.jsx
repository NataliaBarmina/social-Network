import React from "react";
import { useForm } from "react-hook-form";
import { createFields } from "../../common/formsControls/formControls";

// import { Field, reduxForm } from "redux-form";
// import { Textarea } from "../../common/formsControls/formControls";
// import { maxLengthCreator, required } from "../../utils/validators/validators";

// const MyMessage = ({ handleSubmit }) => {
//     const maxLength50 = maxLengthCreator(50)
//     return (
//         <form onSubmit={handleSubmit}>
//             <div><Field placeholder="Enter your message" name={'myMessage'} component={Textarea} validate={[required, maxLength50]} /></div>
//             <button>Send</button>
//         </form>
//     )
// }

// const MessageReduxForm = reduxForm({ form: "myMessage" })(MyMessage)
// const CreateMyMessage = ({ sendMessageCreator }) => {
//     const addNewMessage = (values) => {sendMessageCreator(values.myMessage)}
//     return <div><MessageReduxForm onSubmit={addNewMessage} /></div>
// }

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
            {/* <textarea {...register('myMessage', {
                required: "поле обязательно к заполнению",
                maxLength: {
                    value: 50,
                    message: "максимальная длина 50 символов"
                }
            })}></textarea> */}

            {createFields('textarea', 'myMessage', "", register, "поле обязательно к заполнению", 50, "максимальная длина 50 символов")}

            {errors.myMessage && <p style={{ color: 'red' }}>{errors.myMessage.message || 'error'}</p>}
            <button disabled={!isValid}>Send</button>


        </form>
    )
}
export default CreateMyMessage;


