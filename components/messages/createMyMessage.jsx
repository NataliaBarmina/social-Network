import React from "react";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../common/formsControls/formControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";

const MyMessage = ({ handleSubmit }) => {
    const maxLength50 = maxLengthCreator(50)
    return (
        <form onSubmit={handleSubmit}>
            <div><Field placeholder="Enter your message" name={'myMessage'} component={Textarea} validate={[required, maxLength50]} /></div>
            <button>Send</button>
        </form>
    )
}

const MessageReduxForm = reduxForm({ form: "myMessage" })(MyMessage)

const CreateMyMessage = ({ sendMessageCreator }) => {

    const addNewMessage = (values) => {
        sendMessageCreator(values.myMessage);
    }
    return (
        <div>
            <MessageReduxForm onSubmit={addNewMessage} />
        </div>
    )
}
export default CreateMyMessage;


