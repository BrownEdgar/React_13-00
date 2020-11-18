import React from 'react'
import { NavLink } from 'react-router-dom'
import {ROUTES} from "./Routes"

export default function Manu(props) {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to={"/"}>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/"}>Abut</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/"}>FAQs</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/"}>Support</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
