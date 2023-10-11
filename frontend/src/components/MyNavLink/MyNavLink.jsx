import { NavLink } from "react-router-dom"
import myNavLinkCSS from "./MyNavLink.module.css"

const MyNavLink = (props) => {
    return (
        <NavLink {...props} className={myNavLinkCSS.style}></NavLink>
    )
}

export default MyNavLink;
