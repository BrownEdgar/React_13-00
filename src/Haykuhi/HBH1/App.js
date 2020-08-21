import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import About from './About/About';
import Services from './Services/Services';
import Contact from './Contact/Contact';
import Error404 from './Error404/Error404';
import data from './data/data.json'


export default class App extends React.Component {
	state = {
		users: data.users,
    }
    render() {
		return (
			<BrowserRouter>
				<div className='App'>
					<Navbar />

					<Route exact path='/' component={(props) => <Home {...props} name='home' />} />
					<Route path='/about/:name' component={(props) => <About {...props} name='about' users={this.state.users}/>} /> 
					<Route path='/services' component={(props) => <Services {...props} count='5' />} />
					<Route path='/contact' component={Contact} />
					<Route path='/error404' component={Error404} />
					<Redirect to='/error404' />
				</div>
			</BrowserRouter>
		);
	}
}


//data.json-i mej shat tvyalner qcel, u about-um bolor@ cuyc ta: heto meki vra seghmeluc heto verevi hasceum cuyc ta id-in(history-ovpush)