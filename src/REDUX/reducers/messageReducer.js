const SEND_MESSAGE = 'messagesPage/SEND-MESSAGE';
const DELETE_MESSAGE = 'messagesPage/DELETE_MESSAGE'

let initialState = {
    usersMessages: [
        { id: 1, name: "Natalya", value: 'HI', },
        { id: 2, name: "Valia", value: "It`s me", },
        { id: 3, name: "Sergey", value: "Hello!", },
        { id: 4, name: "Andrey", value: "What`s up?", },
        { id: 5, name: "Anna", value: 'YO' },
    ],
}

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody;

            return {
                ...state,
                usersMessages: [...state.usersMessages, { id: 6, value: body }],
            }
        }

        case DELETE_MESSAGE: {
            return {
                ...state,
                usersMessages: state.usersMessages.filter(message => message.messageId !== action.messageId)
            }

        }

        default: return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })
export const deleteMessage = (messageId) => ({ type: DELETE_MESSAGE, messageId })

export default messageReducer;
