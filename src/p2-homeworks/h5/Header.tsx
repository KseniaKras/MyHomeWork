import React from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import s from './HW5.module.css'

function Header() {
    // const [show, setShow] = useState(false)

    const linkClassName = `${s.link + ' ' + s.active}`

    return (
        <div className={s.header}>
            <div className={s.menu}>
                <NavLink className={linkClassName} to={PATH.PRE_JUNIOR}>Pre-junior</NavLink>
                <NavLink className={linkClassName} to={PATH.JUNIOR}>Junior</NavLink>
                <NavLink className={linkClassName} to={PATH.JUNIOR_PLUS}>Junior+</NavLink>
            </div>
            <div className={s.collapsedMenu}>Menu</div>

        </div>
    )
}

export default Header
