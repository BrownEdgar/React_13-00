import React, {Component} from 'react';
import {NavLink, Link} from 'react-router-dom';
import style from './Navbar.module.css'
class Nav extends Component {
    render() {
        return (
            <nav className={style.flex}>
   
                <ul className="myMenu">
						<li>
							<NavLink to={{
								pathname:'/'}}
							activeClassName={style.active}
							exact>
								Home
							</NavLink>
						</li>
					<li>
						<NavLink to={{
							pathname: '/cars'
						}}
							activeClassName={style.active}
							exact>
							Cars
							</NavLink>
					</li>
                </ul>
            </nav>
        );
    }
}
export default Nav;
