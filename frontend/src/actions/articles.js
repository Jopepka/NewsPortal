import axios from 'axios';
import { setArticles, setIsFetching } from '../reducers/articlesReducer';

const API_KEY = 'd75dfc29a471c0dc321fe4a4b6f42d6d';

export const getArticles = (category = 'general') => {
    return async (dispatch) => {
        dispatch(setIsFetching(true));
        const response = await axios.get(`https://gnews.io/api/v4/top-headlines?category=${category}&lang=ru&apikey=${API_KEY}`)
        const articles = response.data.articles.map((article, i = -1) => {
            i += 1;
            return (
                { id: i, ...article }
            )
        })
        dispatch(setArticles(articles));
    }
}
