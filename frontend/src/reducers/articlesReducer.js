const SET_ARTICLES = 'SET_ARTICLES';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_CURRENT_ARTICLES = 'SET_CURRENT_ARTICLES';

const setCurrentArticles__addCount__default = 1;

const defaultState = {
    items: [
        {
            id: 1,
            title: "Google's Pixel 7 and 7 Pro’s design gets revealed even more with fresh crisp renders",
            description: "Now we have a complete image of what the next Google flagship phones will look like. All that's left now is to welcome them during their October announcement!",
            content: "Google’s highly anticipated upcoming Pixel 7 series is just around the corner, scheduled to be announced on October 6, 2022, at 10 am EDT during the Made by Google event. Well, not that there is any lack of images showing the two new Google phones, b... [1419 chars]",
            url: "https://www.phonearena.com/news/google-pixel-7-and-pro-design-revealed-even-more-fresh-renders_id142800",
            image: "https://m-cdn.phonearena.com/images/article/142800-wide-two_1200/Googles-Pixel-7-and-7-Pros-design-gets-revealed-even-more-with-fresh-crisp-renders.jpg",
            publishedAt: "2022-09-28T08:14:24Z",
            source: {
                name: "PhoneArena",
                url: "https://www.phonearena.com"
            }
        },
    ],
    isFetching: true,

    countCurrentArticles: 0,
    currentArticles: [],
}

export default function articlesReducer(state = defaultState, action) {
    switch (action.type) {

        case SET_ARTICLES:
            return {
                ...state,
                items: action.payload,
                isFetching: false,

                countCurrentArticles: 0,
                currentArticles: [],
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload,
            }
        case SET_CURRENT_ARTICLES:
            const count = state.countCurrentArticles + action.payload;

            if (count > state.items.length)
                return state
            else
                return {
                    ...state,
                    isFetching: false,
                    countCurrentArticles: count,
                    currentArticles: state.items.slice(0, count),
                }
        default:
            return state;
    }
}

export const setArticles = (articles) => ({ type: SET_ARTICLES, payload: articles });
export const setIsFetching = (bool) => ({ type: SET_IS_FETCHING, payload: bool });
export const setCurrentArticles = (addCount = setCurrentArticles__addCount__default) => ({ type: SET_CURRENT_ARTICLES, payload: addCount })
