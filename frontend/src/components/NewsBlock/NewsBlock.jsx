import { Link, NavLink } from 'react-router-dom';
import Category from '../Category/Category';
import Author from './Author/Author';
import ImgNews from './ImgNews/ImgNews';
import newsBlockCSS from './NewsBlock.module.css';

const NewsBlock = (props) => {
    return (
        <div className={newsBlockCSS.newsBlock}>
            <NavLink className={newsBlockCSS.link} to='/aboba/1'>
                <ImgNews />
            </NavLink>

            <div className={newsBlockCSS.categories}>
                <Category toPath="/All" name='All' />
                <Category toPath="/Sport" name='Gaming' />
            </div>


            <div className={newsBlockCSS.content}>
                <NavLink to='/aboba/1' className={newsBlockCSS.link}>
                    <div className={newsBlockCSS.title}>
                        Человек съел пельмени и отравился
                    </div>

                    <div className={newsBlockCSS.discription}>
                        В Нижнем Новгороде студент 3 курса съел пельмени и ему неожиданно стало плохо
                    </div>

                </NavLink>

                <div className={newsBlockCSS.author}>
                    <Author></Author>
                </div>

            </div>



        </div>
    )
}

export default NewsBlock;
