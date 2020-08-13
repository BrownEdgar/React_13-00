import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import About from './About/About';
import Services from './Services/Services';
import Contact from './Contact/Contact';
import Error404 from './Error404/Error404';

export default class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div className='App'>
					<Navbar />
					<Route exact path='/' component={(props) => <Home {...props} name='home' />} />
					<Route path='/about' component={(props) => <About {...props} name='about' />} />
					<Route path='/services' component={(props) => <Services {...props} count='5' />} />
					<Route path='/contact' component={Contact} />
					<Route path='/error404' component={Error404} />
					<Redirect to='/error404' />
				</div>
			</BrowserRouter>
		);
	}
}
