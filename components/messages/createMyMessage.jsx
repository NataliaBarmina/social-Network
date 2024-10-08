import React from "react";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../common/formsControls/formControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";

const MyMessage = (props) => {
    const maxLength50 = maxLengthCreator(50)
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder="Enter your message" name={'myMessage'} component={Textarea} validate={[required, maxLength50]} /></div>
            <button>Send</button>
        </form>
    )
}

const MessageReduxForm = reduxForm({ form: "myMessage" })(MyMessage)

const CreateMyMessage = (props) => {

    const addNewMessage = (values) => {
        props.sendMessageCreator(values.myMessage);
    }
    return (
        <div>
            <MessageReduxForm onSubmit={addNewMessage} />
        </div>
    )
}
export default CreateMyMessage;


