import { NavLink } from 'react-router-dom';
import Author from './Author/Author';
import ImgNews from './ImgNews/ImgNews';
import newsBlockCSS from './NewsBlock.module.css';

const NewsBlock = ({ article }) => {
    return (
        <div className={newsBlockCSS.newsBlock}>
            <NavLink className={newsBlockCSS.link} to='./1'>
                <ImgNews />
            </NavLink>

            {/* <CategoriesBar categories={categories}/> */}

            <div className={newsBlockCSS.content} >
                <NavLink to='/1' className={newsBlockCSS.link}>
                    <div className={newsBlockCSS.title}>
                        {article.title}
                    </div>

                    <div className={newsBlockCSS.description}>
                        {article.description}
                    </div>
                </NavLink>

                <div className={newsBlockCSS.author}>
                    <Author></Author>
                </div>
            </div>
        </div >
    )
}

export default NewsBlock;
