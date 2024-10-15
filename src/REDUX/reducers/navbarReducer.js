
let initialState = {
    links: [
        {
            id: 1,
            path: "/profile",
            pathName: 'PROFILE',
        },

        {
            id: 2,
            path: "/users",
            pathName: 'USERS',
        },

        {
            id: 3,
            path: "/messages",
            pathName: 'MESSAGES',
        },
        {
            id: 4,
            path: "/login",
            pathName: 'LOGIN',
        },

        {
            id: 5,
            path: "/dialogs",
            pathName: 'DIALOGS',
        },

    ],
}

const navbarReducer = (state = initialState, action) => {
    return state;
}
export default navbarReducer;