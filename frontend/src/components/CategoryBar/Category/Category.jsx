import categoryCSS from './Category.module.css'
import { NavLink } from "react-router-dom"

const Category = ({ toPath, name }) => {
    return (
        <NavLink
            className={({ isActive, isPending }) => isActive ? categoryCSS.nav__item__active : categoryCSS.nav__item}
            to={toPath}
        >
            {name}
        </NavLink>
    )
}

export default Category;
