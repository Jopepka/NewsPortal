import { useEffect } from 'react';
import MainFeed from './MainFeed';
import { useDispatch, useSelector } from 'react-redux';
import { getArticles } from '../../actions/articles';
import Loader from '../Loader/Loader';
import { changeCategory } from '../../reducers/categoriesReducer';

const MainFeedConteiner = ({ category }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeCategory(category.id))
    }, [category])

    const articles = useSelector(state => {
        return state.articles.items;
    })

    const isFetching = useSelector(state => {
        return state.articles.isFetching;
    })

    useEffect(() => {
        dispatch(getArticles(category.name))
    }, [category])

    return (
        <div>
            {isFetching === false
                ?
                <MainFeed category={category} articles={articles}></MainFeed>
                :
                <Loader />
            }
        </div>
    )
}


export default MainFeedConteiner;


