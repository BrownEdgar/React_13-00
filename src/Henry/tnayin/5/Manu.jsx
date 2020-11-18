import React from 'react'
import { NavLink } from 'react-router-dom'
import {ROUTES, ROUTS} from "./Routes"
export default function Manu(props) {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                    <NavLink to={ROUTES.home}>home</NavLink>
                    </li>
                    <li>
                    <NavLink to={ROUTES.features}>features</NavLink>
                    </li>
                    <li>
                    <NavLink to={ROUTES.services}>services</NavLink>
                    </li>
                    <li>
                    <NavLink to={ROUTES.client}>client</NavLink>
                    </li>
                    <li>
                    <NavLink to={ROUTES.team}>team</NavLink>
                    </li>
                    <li>
                    <NavLink to={ROUTES.pricing}>pricing</NavLink>
                    </li>
                    <li>
                    <NavLink to={ROUTES.contact}>contact</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
