import { NavLink } from 'react-router-dom';
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

            <NavLink to='/general'>
                <h1>К новостям →</h1>
            </NavLink>
        </div>
    )
}

export default Welcome;
