import { profileAPI } from "../../API/api"

const ADD_NEW_POST = 'profilePage/ADD-NEW-POST';
const SET_USER_PROFILE = 'profilePage/SET-USER-PROFILE';
const SET_STATUS = 'profilePage/SET-STATUS'
const SAVE_PHOTO_SUCCESS = 'profilePage/SAVE-PHOTO-SUCCESS';
const ADD_ERROR = 'profilePage/ADD-ERROR';

let initialState = {
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
    profile: null,
    status: "",
    error: null,
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_NEW_POST:

            return {
                ...state,
                posts: [...state.posts, { id: 3, value: action.newPostText }],
            }

        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile,
            }

        case SET_STATUS:
            return {
                ...state, status: action.status,
            }

        case ADD_ERROR:
            return {
                ...state, error: action.error,
            }

        case SAVE_PHOTO_SUCCESS:
            return {
                ...state, profile: { ...state.profile, photos: action.photos }

            }

        default: return state;
    }
}
export default profileReducer;

export const addNewPostActionCreator = (newPostText) => ({ type: ADD_NEW_POST, newPostText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })
export const addError = (error) => ({ type: ADD_ERROR, error })

export const getProfileUser = (userId) =>
    async (dispatch) => {
        const response = await profileAPI.getProfile(userId)
        dispatch(setUserProfile(response.data))
    }

export const getStatus = (userId) =>
    async (dispatch) => {
        const response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data))
    }


export const updateStatus = (status) =>
    async (dispatch) => {
        try {
            const response = await profileAPI.updateStatus(status)
            if (response.data.resultCode === 0)
                dispatch(setStatus(status))
        } catch (error) {
            alert('ourError:' + error) // образец локальной обработки ошибки 
        }
    }

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.id

    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getProfileUser(userId)) // обращаемся к CK getProfileUser
    } else {
        dispatch(addError(response.data.messages[0]))
    }
}
