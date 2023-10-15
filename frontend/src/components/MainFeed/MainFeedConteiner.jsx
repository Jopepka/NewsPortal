import { useEffect } from 'react';
import MainFeed from './MainFeed';
import { useDispatch, useSelector } from 'react-redux';
import { getArticlesAndSetCurrentArticles } from '../../actions/articles';
import Loader from '../Loader/Loader';
import { changeCategory } from '../../reducers/categoriesReducer';
import { setCurrentArticles } from '../../reducers/articlesReducer';

const MainFeedConteiner = ({ category }) => {
    const setCurrentArticles__addCount = 2;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeCategory(category.id));
        dispatch(getArticlesAndSetCurrentArticles(category.name, setCurrentArticles__addCount));
    }, [category])

    const articles = useSelector(state => {
        return state.articles.currentArticles;
    })

    const isFetching = useSelector(state => {
        return state.articles.isFetching;
    })

    const getMore = () => {
        dispatch(setCurrentArticles(setCurrentArticles__addCount));
    }

    return (
        <div>
            {isFetching === false
                ?
                <MainFeed category={category} articles={articles} getMore={getMore}></MainFeed>
                :
                <div>
                    <MainFeed category={category} articles={articles} getMore={getMore}></MainFeed>
                    <Loader />
                </div>
            }
        </div>
    )
}


export default MainFeedConteiner;


