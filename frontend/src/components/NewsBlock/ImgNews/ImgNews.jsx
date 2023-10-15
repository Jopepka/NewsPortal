import imgNewsCSS from './ImgNews.module.css';

const ImgNews = ({ src }) => {
    return (
        <div className={imgNewsCSS.imgNews}>
            <img
                className={imgNewsCSS.imgNews__img}
                src={src}
                alt="news"
            />
        </div>

    )
}

export default ImgNews;
