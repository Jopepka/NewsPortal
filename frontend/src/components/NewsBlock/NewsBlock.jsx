import { NavLink } from 'react-router-dom';
import Author from './Author/Author';
import ImgNews from './ImgNews/ImgNews';
import newsBlockCSS from './NewsBlock.module.css';

const NewsBlock = ({ article }) => {
    return (
        <div className={newsBlockCSS.newsBlock}>
            <a href={article.url} className={newsBlockCSS.link} >
                <ImgNews src={article.image} />
            </a>

            {/* <CategoriesBar categories={categories}/> Хотелось бы добавить, но текущее API не позволяет*/}

            <div className={newsBlockCSS.content} >
                <a href={article.url} className={newsBlockCSS.link}>
                    <div className={newsBlockCSS.title}>
                        {article.title}
                    </div>

                    <div className={newsBlockCSS.description}>
                        {article.description}
                    </div>
                </a>

                <div className={newsBlockCSS.author}>
                    {/* <Author></Author> Та же беда*/}
                </div>
            </div>
        </div >
    )
}

export default NewsBlock;
