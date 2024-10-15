import { authUser } from "./authReducer"

const INITIALIZED_SUCCESS = "app/INITIALIZED_SUCCESS"

let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }

        default:
            return state;
    }
}

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS })

export const initializeApp = () => (dispatch) => {// нужно дождаться данных, что пользователь зарегистрирован, а только потом что-то диспатчить 

    let promise = dispatch(authUser());    // диспатч возвращает, то что мы ретурним в authUser, а это промис
    promise.then(() => {
        dispatch(initializedSuccess());    // когда  диспатч вернул промис то диспатчим АС
    })
}

export default appReducer;