import { userAPI } from "../../API/api";
import { updateObjectInArray } from '../../utils/objectHelpers'

const FOLLOW = 'usersPage/FOLLOW';
const UNFOLLOW = 'usersPage/UN-FOLLOW';
const SET_USERS = 'usersPage/SET-USERS';
const SET_CURRENT_PAGE = 'usersPage/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'usersPage/SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'usersPage/TOGGLE-IS-FETCHING'
const TOGGLE_FOLLOWING_PROGRESS = 'usersPage/TOGGLE-FOLLOWING-PROGRESS'

let initialState = {
    users: [],
    pageSize: 100,        // сколько пользователей на странице мы хотим
    totalItemsCount: 0,   //общее кол-во пользователей, данные приходят с сервера
    currentPage: 1,       // номер текущей страницы
    portionSize: 100,     // размер порции в пагинаторе
    isFetching: false,    // идет ли ПРОЦЕСС загрузки данных (первоначально данные не загружаются) 
    followingProgress: [],// массив с id пользователей, на которорых мы подписываемся/отп-ся
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', { followed: true })
                // создает новую копию  объекта и заменяет старое свойство followed новым, если id пользователя равно id приходящим в action:

                // users: state.users.map(user => {
                //     if (user.id === action.userId) {
                //         return { ...user, followed: true }
                //     }
                //     return user;
                // }),
            }

        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', { followed: false })
            }

        case SET_USERS:
            return { ...state, users: action.users }

        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }

        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalItemsCount: action.totalCount }

        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }

        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingProgress: action.followingProgress ?    // пришла подписка?
                    [...state.followingProgress, action.userId]  // получаем  id того пользователя, на которого мы подписываемся/отп-ся
                    : state.followingProgress.filter(id => id !== action.userId)// отфильтровываем ненужного пользователя (пропускаем только ту id, которая не равна id из action
            }

        default: return state;
    }

}

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unFollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setUserCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgress = (followingProgress, userId) => ({ type: TOGGLE_FOLLOWING_PROGRESS, followingProgress, userId })

export const requestUsers = (page, pageSize) => { // запрос пользователя
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));         // процесс загрузки идет
        dispatch(setCurrentPage(page));           // устанавливаем текущую страницу

        let response = await userAPI.getUsers(page, pageSize) //запрос пользователя на сервер 
        dispatch(toggleIsFetching(false));                    // процесса загрузки нет
        dispatch(setUsers(response.items));                   // устанавливаем пользователей
        dispatch(setUserCount(response.totalCount));          // устанавливаем общее количество пользоват
    }
}

const followUnFollowFlow = async (dispatch, id, apiMethod, actionCreator) => {//общая функция чтобы избежать дублирования кода
    dispatch(toggleFollowingProgress(true, id)); //пришла подписка, получаем id
    let response = await apiMethod(id);
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(id))
    }
    dispatch(toggleFollowingProgress(false, id)); // отфильтровываем ненужного пользователя (пропускаем только ту id, которая не равна id из action
}

export const unFollowUser = (id) => {
    return async (dispatch) => {
        const apiMethod = await userAPI.unFollow.bind(userAPI)  // надо ли использовать привязку? (bind)
        followUnFollowFlow(dispatch, id, apiMethod, unFollow)
    }
}

export const followUser = (id) => {
    return async (dispatch) => {
        const apiMethod = await userAPI.follow                  // надо ли использовать привязку? (bind)
        followUnFollowFlow(dispatch, id, apiMethod, follow)
    }
}



export default usersReducer;