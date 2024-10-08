import { createSelector } from "reselect"

export const getUsers = (state) => {
    return state.usersPage.users
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}
export const getPortionSize = (state) => {
    return state.usersPage.portionSize
}
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalItemsCount
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}
export const getFollowingProgress = (state) => {
    return state.usersPage.followingProgress
}

export const getUsersSuper = createSelector(getUsers, (users) => {  // пример использования reselect, в коде не исп-ся
    return users.filter(u => true)
})

export const getUsersSuper2 = createSelector(getUsers, getPageSize, (users, state) => {  // пример использования reselect, в коде не исп-ся
    return users.filter(u => true)
})