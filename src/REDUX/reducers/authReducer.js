import { authUserAPI, securityAPI } from '../../API/api';
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'auth/SET-USER-DATA';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaURL: null,   // если null, то каптча не требуется 
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            }
        default: return state
    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { id, email, login, isAuth } });
export const getCaptchaURLSuccess = (captchaURL) => ({ type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaURL } });

export const authUser = () => async (dispatch) => {
    let response = await authUserAPI.me()        //запрашиваем есть ли авторизация
    if (response.data.resultCode === 0) {       // проверка залогинены ли мы
        let { id, email, login } = response.data.data
        dispatch(setAuthUserData(id, email, login, true)) // сетим данные в стэйт
    }
}


export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authUserAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        // success, get auth data
        dispatch(authUser()) // диспатчим санку authUser (если есть авторизация, то данные доб-ся в стэйт)

    } else {
        if (response.data.resultCode === 10) {// should be added captcha if there is resultCode is 10 in response data
            dispatch(getCaptchaURL());
        }

        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';  // проверка если не приходит сообщение об ошибке, то показываем  'Some error',  если  есть, то показываем само сообщение 

        dispatch(stopSubmit('login', { _error: message }));   // диспатчим специальный АС, созданный в редакс -форм, туда передаем название формы, которую в которой мы делаем stopSubmit и объект с общей ошибкой (защита от взлома, чтобы взломщик не догадался в логине или пароле он ошибся )
    }
}

export const logout = () => async (dispatch) => {
    let response = await authUserAPI.logout()               //удаляем  авторизационные данные 

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false)) //  сетим нулевые и ложные данные в стэйт
    }
}

export const getCaptchaURL = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaURL();
    const captchaURL = response.data.url;
    dispatch(getCaptchaURLSuccess(captchaURL));
}

export default authReducer; 