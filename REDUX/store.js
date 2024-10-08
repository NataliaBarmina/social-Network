// образец стора

import dialogReducer from '../REDUX/reducers/dialogReducer'
import navbarReducer from '../REDUX/reducers/navbarReducer'
import profileReducer from '../REDUX/reducers/profileReducer'
import messageReducer from '../REDUX/reducers/messageReducer'

import dog2 from '../REDUX/pictures/dog2.jpeg';
import dog1 from '../REDUX/pictures/photoUser.jpeg';
import bird from '../REDUX/pictures/images (2).jpeg';
import cat from '../REDUX/pictures/images (3).jpeg';

let store = {

    _state: {
        navbarPage: {
            links: [
                {
                    id: 1,
                    path: "/profile",
                    pathName: 'PROFILE',
                },
                {
                    id: 2,
                    path: "/dialogs",
                    pathName: 'DIALOGS',
                },
                {
                    id: 3,
                    path: "/news",
                    pathName: 'NEWS',
                },
                {
                    id: 4,
                    path: "/music",
                    pathName: 'MUSIC',
                },
                {
                    id: 5,
                    path: "/messages",
                    pathName: 'MESSAGES',
                },
                {
                    id: 6,
                    path: "/login",
                    pathName: 'LOGIN',
                },
            ],
        },

        dialogsPage: {
            contents: [
                {
                    id: 1,
                    name: 'Valia',
                    userPicUrl: bird,
                    value: 'Hi! What`s up? I`m fine.',
                },
                {
                    id: 2,
                    name: "Yana",
                    userPicUrl: cat,
                    value: 'Hi! I`m also fine. And how are you?',
                },
                {
                    id: 3,
                    name: 'Natalya',
                    userPicUrl: dog1,
                },
                {
                    id: 4,
                    name: 'Sergey',
                    userPicUrl: dog2,
                },
            ],
        },
        profilePage: {
            posts: [
                {
                    id: 1,
                    value: "Why everybody love me",
                },
                {
                    id: 2,
                    value: "It`s our new program",
                },
            ],
            newPostText: "",
        },
        messagesPage: {
            names: [
                { id: 1, name: "Natalya", },
                { id: 2, name: "Valia", },
                { id: 3, name: "Sergey", },
                { id: 4, name: "Andrey", },
                { id: 5, name: "Anna", },
            ],
            messages: [
                { id: 1, value: 'HI', },
                { id: 2, value: "It`s me", },
                { id: 3, value: "Hello!", },
                { id: 4, value: "What`s up?", },
            ],
            newMessageBody: "",
        }
    },
    _callSubscriber(state) {
        alert(state)
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;  // паттерн наблюдатель
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messageReducer(this._state.messagesPage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._state.navbarPage = navbarReducer(this._state.navbarPage, action);

        this._callSubscriber(this._state);
    }
}

export default store;

window.store = store;