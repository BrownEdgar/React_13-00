import React, { Component } from 'react'
import "./index.css"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Cars from './Cars'
import Home from './Home'
import Navbar from './Navbar'
import CarDetals from './CarDetals'
export default class App extends Component {
	state = {
		cars: [
			{
				id: 1,
				model: "GT",
				name: "Mercedes",
				year: 2020,
				price: "120000",
				image: "https://images.unsplash.com/photo-1501066927591-314112b5888e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
			},
			{
				id: 2,
				model: "GT",
				name: "Mercedes",
				year: 2020,
				price: "120000",
				image: "https://images.unsplash.com/photo-1501066927591-314112b5888e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
			},
			{
				id: 3,
				model: "a7",
				name: "Audi",
				year: 2020,
				price: "120000",
				image: "https://images.unsplash.com/photo-1566274360936-69fae8dc1d95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
			},
		]
	}
	render() {
		return (
			<Router>
				<div>
					<Navbar/>
					<Route exact path={"/"} component={Home}/>
					<Route exact path={"/cars"} render={(props) => <Cars props={{...props}} options={this.state.cars}/>}/>
					<Route exact path={"/cars/:name"} component={CarDetals}/>
				</div>
			</Router>

		)
	}
}
