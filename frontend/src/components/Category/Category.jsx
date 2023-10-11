import MyNavLink from '../MyNavLink/MyNavLink';
import categoryCSS from './Category.module.css'
import { NavLink } from "react-router-dom"

const Category = ({ toPath, name }) => {
    return (
        <div>
            <NavLink className={categoryCSS.nav__item} to={toPath}>{name}</NavLink>
        </div>

    )
}

export default Category;
