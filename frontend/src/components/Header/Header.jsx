import Category from '../Category/Category';
import headerCSS from './Header.module.css'
import { NavLink } from "react-router-dom"

const Header = (props) => {
    return (
        <div className={headerCSS.header}>
            <div className={headerCSS.logo}>
                <NavLink className={headerCSS.logo__nav} to='/'>News Portal</NavLink>
            </div>

            <div className={headerCSS.navbar}>
                <div>
                    <Category toPath='/all' name='All'></Category>
                </div>
                <div>
                    <Category toPath='/sport' name='Sport'></Category>
                </div>
                <div>
                    <Category toPath='/gaming' name='Gaming'></Category>
                </div>
            </div>

            <div className={headerCSS.menu}>Menu</div>
        </div>
    )
}

export default Header;
