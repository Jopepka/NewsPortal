import errorPageCSS from './ErrorPage.module.css';
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className={errorPageCSS.box}>
            <h1>Произошла ошибка адрессации</h1>
            <Link className={errorPageCSS.box__desctiption} to='/'>Вернуться на главную страницу →</Link>
        </div>
    )
}

export default ErrorPage;
