import { legacy_createStore, combineReducers, applyMiddleware, compose } from 'redux'
import navbarReducer from './reducers/navbarReducer';
import dialogReducer from './reducers/dialogReducer';
import profileReducer from './reducers/profileReducer';
import messageReducer from './reducers/messageReducer';
import usersReducer from './reducers/usersReducer';
import authReducer from './reducers/authReducer';
import appReducer from './reducers/appReducer';
import { thunk } from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    navbarPage: navbarReducer,
    dialogsPage: dialogReducer,
    profilePage: profileReducer,
    messagesPage: messageReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
}
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

// let store = legacy_createStore(reducers, applyMiddleware(thunk));

export default store;

