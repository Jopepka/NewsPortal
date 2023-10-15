import mainFeedCSS from './MainFeed.module.css';
import NewsBlock from '../NewsBlock/NewsBlock';
import HeaderFeed from './header/HeaderFeed';
import MoreButton from './MoreButton/MoreButton';

const MainFeed = ({ category, articles, getMore }) => {
    return (
        <div>
            <HeaderFeed title={category.title} description={category.description} />

            <div className={mainFeedCSS.feed}>
                {articles?.map((article) => <NewsBlock key={article.id} article={article} />)}
            </div>

            <MoreButton onClick={getMore} />
        </div>
    )
}

export default MainFeed;
