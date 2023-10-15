import { Link } from 'react-router-dom';
import welcomeCSS from './Welcome.module.css';

const Welcome = () => {
    return (
        <div className={welcomeCSS.box}>
            <div className={welcomeCSS.box__title}>
                <h2>Это новостной сайт, созданный пользователем Jopepka для портфолио</h2>
            </div>
            <div>Ознакомиться с исходным кодом можно в репозитории на github:
                <a href="https://github.com/Jopepka/NewsPortal"> https://github.com/Jopepka/NewsPortal</a>
            </div>

            <Link className={welcomeCSS.linkToNews} to='/general'>
                <h1 className={welcomeCSS.linkToNews__text}>К новостям</h1>
                <h1 className={welcomeCSS.linkToNews__symbol}>→</h1>
            </Link>
        </div>
    )
}

export default Welcome;
