import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { MainRoute } from './routes/Routing';
import { Home, Portfolio, About, Contact, Navbar} from './Components'
import './assets/styles/style.scss'

export default class App extends Component {
	render() {
		return (
			<div>
				<Navbar/>
				<Switch>
					<Route exact path={MainRoute.home} component={Home} />
					<Route exact path={MainRoute.contact} component={Contact} />
					<Route exact path={MainRoute.about} component={About} />
					<Route exact path={MainRoute.portfolio} component={Portfolio} />
					<Route path={MainRoute.home} component={Home} />
				</Switch>

			</div>
		)
	}
}
