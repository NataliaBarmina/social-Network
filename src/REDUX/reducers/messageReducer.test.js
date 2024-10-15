import { sendMessageCreator, messageReducer, deleteMessage } from "./messageReducer";

let state = {
    usersMessages: [
        { id: 1, name: "Natalya", value: 'HI', },
        { id: 2, name: "Valia", value: "It`s me", },
        { id: 3, name: "Sergey", value: "Hello!", },
        { id: 4, name: "Andrey", value: "What`s up?", },
        { id: 5, name: "Anna", value: 'YO' },
    ],
}

it('length of messages should be incremented', () => {
    // test data
    let action = sendMessageCreator('How are you?');

    // action
    let newState = messageReducer(state, action);

    // expectation
    expect(newState.usersMessages.length).toBe(5);
})

it('new message should be correct', () => {

    let action = sendMessageCreator('How are you?');
    let newState = messageReducer(state, action);
    expect(newState.usersMessages[5].value).toBe('How are you?')
})

it('after deleting message, length of messages should be decrement', () => {

    let action = deleteMessage(1);
    let newState = messageReducer(state, action);
    expect(newState.usersMessages.length).toBe(4)
})

it('after deleting length shouldn`t be decrement if id is incorrect', () => {
    let action = deleteMessage(1000);
    let newState = messageReducer(state, action);
    expect(newState.usersMessages.length).toBe(5)
})


