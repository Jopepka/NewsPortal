import CategoriesBar from '../CategoryBar/CategoriesBar';
import headerCSS from './Header.module.css'
import { NavLink } from "react-router-dom"

const Header = ({ categories }) => {
    return (
        <div className={headerCSS.header}>
            <div className={headerCSS.logo}>
                <NavLink
                    className={headerCSS.logo__nav}
                    to='/'>News Portal</NavLink>
            </div>

            <CategoriesBar categories={categories} />

            <div className={headerCSS.menu}>Menu</div>
        </div>
    )
}

export default Header;
