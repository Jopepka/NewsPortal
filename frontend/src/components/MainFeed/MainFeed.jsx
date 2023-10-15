import mainFeedCSS from './MainFeed.module.css';
import NewsBlock from '../NewsBlock/NewsBlock';

const MainFeed = ({ category, articles }) => {
    return (
        <div className={mainFeedCSS.content}>
            <div className={mainFeedCSS.content__header}>
                <div className={mainFeedCSS.content__header__title}>{category.title}</div>
                <div className={mainFeedCSS.content__header__discription}>{category.description}</div>
            </div>

            <div className={mainFeedCSS.content__feed}>
                {articles?.map((article) => <NewsBlock key={article.id} article={article} />)}
            </div>

            <div className={mainFeedCSS.content__moreButton}>
                <button
                    // onClick={e => setArticles(getMore())}
                    className={mainFeedCSS.content__moreButton__button}>
                    More topics
                </button>
            </div>
        </div>
    )
}

export default MainFeed;
