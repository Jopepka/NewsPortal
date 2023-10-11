import mainFeedCSS from './MainFeed.module.css';
import NewsBlock from '../NewsBlock/NewsBlock';

const MainFeed = () => {
    return (
        <div className={mainFeedCSS.content}>
            <div className={mainFeedCSS.content__header}>
                <div className={mainFeedCSS.content__header__title}>Свежие новости!</div>
                <div className={mainFeedCSS.content__header__discription}>Только у нас самые свежие новости</div>
            </div>

            <div className={mainFeedCSS.content__feed}>
                <NewsBlock></NewsBlock>
                <NewsBlock></NewsBlock>
                <NewsBlock></NewsBlock>
                <NewsBlock></NewsBlock>
            </div>
        </div>
    )
}


export default MainFeed;


