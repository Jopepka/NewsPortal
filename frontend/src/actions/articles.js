import axios from 'axios';
import { setArticles, setCurrentArticles, setIsFetching } from '../reducers/articlesReducer';

const API_KEY = process.env.API_KEY;

export const getArticles = (category = 'general') => {
    return async (dispatch) => {
        dispatch(setIsFetching(true));
        const response = await axios.get(`https://gnews.io/api/v4/top-headlines?category=${category}&lang=ru&country=ru&max=100&apikey=${API_KEY}`)
        const articles = response.data.articles.map((article, i = -1) => {
            i += 1;
            return (
                { id: i, ...article }
            )
        })
        dispatch(setArticles(articles));
    }
}

export const getArticlesAndSetCurrentArticles = (category = 'general', currentArticlesCount) => {
    return async (dispatch) => {
        await dispatch(getArticles(category));
        dispatch(setCurrentArticles(currentArticlesCount));
    }
}
