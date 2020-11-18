import React from 'react'
import { NavLink } from 'react-router-dom'
import {ROUTES, ROUTS} from "./Routes"

export default function Manu(props) {
    return (
        <div>
            <nav>
                <ul>
                    
                      <li>
                          <NavLink to={ROUTES.contact}>Contact</NavLink>
                          </li>
                      <li>
                          <NavLink to={ROUTES.about_us}>About Us</NavLink>
                          </li>
                      <li>
                          <NavLink to={ROUTES.faq}>FAQ's</NavLink>
                          </li>
                      <li>
                          <NavLink to={ROUTES.support}>Support</NavLink>
                          </li>
                    
                </ul>
            </nav>
        </div>
    )
}
