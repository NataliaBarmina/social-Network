import dog2 from '../pictures/dog2.jpeg';
import dog1 from '../pictures/photoUser.jpeg';
import bird from '../pictures/images (2).jpeg';
import cat from '../pictures/images (3).jpeg';

let initialState = {
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
            userPicUrl: dog2,
            value: 'Hi! Hooray! it`s finally summer',
        },
        {
            id: 4,
            name: 'Sergey',
            userPicUrl: dog1,
            value: 'Hi! it`s me',
        },
    ],
}

const dialogReducer = (state = initialState, action) => {
    return state;
}
export default dialogReducer; 