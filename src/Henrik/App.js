import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import About from './About/About';
import Services from './Services/Services';
import Contact from './Contact/Contact';
import Error404 from './Error404/Error404';
import data from "./data/data.json"


export const MyContext = React.createContext();

export default class App extends React.Component {
	state = {
		users: data.users,
		data: "Context",
		isLogin: false,
	}
	login = () =>{
		this.setState({ isLogin: !this.state.isLogin  });
	}
	render() {
		return (
			<BrowserRouter>
				<div className='App'>
					<Navbar />
		<h1>{this.state.isLogin ? "true" : "false"}</h1>
		<button onClick={this.login}>login</button>
					<Route exact path='/' component={(props) => <Home {...props} name='home' />} />
					<MyContext.Provider value={{users: "dhsagdjsa",
					name:"sdad",
					age: 25}}>

					{this.state.isLogin && <Route path='/about' component={(props) => <About {...props} name='about' users={this.state.users} />} />}
					

					</MyContext.Provider>

					<Route path='/services' component={(props) => <Services {...props} count='5' />} />
					<Route path='/contact' component={Contact} />
					<Route path='/error404' component={Error404} />
					
				</div>
			</BrowserRouter>
		);
	}
}
