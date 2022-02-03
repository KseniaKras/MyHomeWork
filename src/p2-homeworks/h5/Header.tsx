import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import s from './HW5.module.css'

function Header() {
    // const [show, setShow] = useState(false)

    return (
        <div className={s.header}>
            <div className={s.menu}>
                <NavLink className={s.link + ' ' + s.active} to={PATH.PRE_JUNIOR}>Pre-junior</NavLink>
                <NavLink className={s.link + ' ' + s.active} to={PATH.JUNIOR}>Junior</NavLink>
                <NavLink className={s.link + ' ' + s.active} to={PATH.JUNIOR_PLUS}>Junior+</NavLink>
            </div>
            <div className={s.collapsedMenu}>Menu</div>

        </div>
    )
}

export default Header
