import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Routes() {
	return (
		<nav class="sidenav">
			<ul class="side_menu">
				<li class="side_menu__item">
					<NavLink to="./">
						<span class="btn">Home</span>
					</NavLink>
				</li>
				<li class="side_menu__item">
					<NavLink to="./about">
						<span class="btn">About</span>
					</NavLink>
				</li>
				<li class="side_menu__item">
					<NavLink to="./portfolio">
						<span class="btn">Portfolio</span>
					</NavLink>
				</li>
				<li class="side_menu__item">
					<NavLink to="./contact">
						<span class="btn">Contact</span>
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}
