const GET_CURRENT_CATEGORY = 'GET_CURRENT_CATEGORY';
const GET_ALL_CATEGORYS = 'GET_ALL_CATEGORYS';
const CHANGE_CATEGORY = 'CHANGE_CATEGORY';

const defaultState = {
    items: [
        {
            id: 0,
            toPath: '/general',
            name: 'general',
            title: 'All news in this catigory',
            description: 'You will find out everything that happens on the planet',
        },
        {
            id: 1,
            toPath: '/sports',
            name: 'sports',
            title: 'Sports',
            description: 'Football? Golf? Tennis? Ping pong.',
        },
        {
            id: 2,
            toPath: '/world',
            name: 'world',
            title: 'World. What is happening in the world?',
            description: 'News from all countries in this topic',
        },
        {
            id: 3,
            toPath: '/technology',
            name: 'technology',
            title: 'Technology',
            description: 'From electric toothbrushes to bionic prostheses',
        },
    ],

    currentItem:
    {
        id: 0,
        toPath: 'general',
        name: 'general',
        title: 'All news in this catigory',
        description: 'You will find out everything that happens on the planet',
    },
    currentIdItem: 0,
}

export default function categoriesReducer(state = defaultState, action) {
    switch (action.type) {
        case GET_ALL_CATEGORYS:
            return state;
        case CHANGE_CATEGORY:
            const newCurrentItem = state.items.find((item) => item.id == state.currentIdItem);
            return { ...state, currentItem: { ...newCurrentItem }, currentIdItem: action.payload }
        default:
            return state;
    }
}

export const changeCategory = (categoryID) => ({ type: CHANGE_CATEGORY, payload: categoryID });
export const getCurrentCategory = () => ({ type: GET_CURRENT_CATEGORY })
export const GetAllCategory = () => ({ type: GET_ALL_CATEGORYS })
