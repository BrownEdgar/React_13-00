import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import About from './About/About';
import Services from './Services/Services';
import Contact from './Contact/Contact';
import Error404 from './Error404/Error404';
<<<<<<< HEAD:src/Haykuhi/HBH1/App.js
import data from './data/data.json'

=======
import data from "./data/data.json"


export const MyContext = React.createContext();
>>>>>>> 20241f3bb1ccfe958f9b3147d53e9f5db776846f:src/Henrik/App.js

export default class App extends React.Component {
	state = {
		users: data.users,
<<<<<<< HEAD:src/Haykuhi/HBH1/App.js
    }
    render() {
=======
		data: "Context",
		isLogin: false,
	}
	login = () =>{
		this.setState({ isLogin: !this.state.isLogin  });
	}
	render() {
>>>>>>> 20241f3bb1ccfe958f9b3147d53e9f5db776846f:src/Henrik/App.js
		return (
			<BrowserRouter>
				<div className='App'>
					<Navbar />
<<<<<<< HEAD:src/Haykuhi/HBH1/App.js

					<Route exact path='/' component={(props) => <Home {...props} name='home' />} />
					<Route path='/about/:name' component={(props) => <About {...props} name='about' users={this.state.users}/>} /> 
=======
		<h1>{this.state.isLogin ? "true" : "false"}</h1>
		<button onClick={this.login}>login</button>
					<Route exact path='/' component={(props) => <Home {...props} name='home' />} />
					<MyContext.Provider value={{users: "dhsagdjsa",
					name:"sdad",
					age: 25}}>

					{this.state.isLogin && <Route path='/about' component={(props) => <About {...props} name='about' users={this.state.users} />} />}
					

					</MyContext.Provider>

>>>>>>> 20241f3bb1ccfe958f9b3147d53e9f5db776846f:src/Henrik/App.js
					<Route path='/services' component={(props) => <Services {...props} count='5' />} />
					<Route path='/contact' component={Contact} />
					<Route path='/error404' component={Error404} />
					
				</div>
			</BrowserRouter>
		);
	}
}


//data.json-i mej shat tvyalner qcel, u about-um bolor@ cuyc ta: heto meki vra seghmeluc heto verevi hasceum cuyc ta id-in(history-ovpush)