import React from "react";
import UserMessages from "./userMessages";
import { compose } from "redux";
import { sendMessageCreator } from "../../REDUX/reducers/messageReducer"
import { WithAuthRedirect } from "../hoc/withAuthRedirect";
import { connect } from "react-redux";
import CreateMyMessage from "./createMyMessage";


const Messages = ({ usersMessages, sendMessageCreator }) => {

    return (
        <div>
            <UserMessages usersMessages={usersMessages} />
            <CreateMyMessage sendMessageCreator={sendMessageCreator} />
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        usersMessages: state.messagesPage.usersMessages,
    }
}

export default compose(
    connect(mapStateToProps, { sendMessageCreator }),
    WithAuthRedirect      //если нет аутентификации - переход на /login
)(Messages)