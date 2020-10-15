
import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Navbar.module.css'

export default function Navbar() {
    return (
        <div className={s.header}>
            <ul className={s.list}>
                <li>
                    <NavLink to='/' activeClassName={s.active} exact>
                        Home Page
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/cars'activeClassName={s.active} exact>
                        Cars
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/contact' activeClassName={s.active} exact>
                        Contact
                    </NavLink>
                </li>
            </ul>
            
        </div>
    )
}