import imgNewsCSS from './ImgNews.module.css';

const ImgNews = (props) => {
    return (
        <div className={imgNewsCSS.imgNews}>
            <img
                className={imgNewsCSS.imgNews__img}
                src="https://img.freepik.com/premium-vector/a-landscape-with-a-lake-and-a-sunset-in-the-background_931646-9.jpg"
                alt="image news"
            />
        </div>

    )
}

export default ImgNews;
