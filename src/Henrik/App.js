import React from 'react';
import { BrowserRouter, Route,  Redirect } from 'react-router-dom';

import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import About from './About/About';
import Services from './Services/Services';
import Contact from './Contact/Contact';
import Error404 from './Error404/Error404';
import data from './data/data.json'


export const MyContext = React.createContext();

export default class App extends React.Component {
	state = {
		users: data.users,
<<<<<<< HEAD
		// data: "Context",
		isLogin: false
	};
	login = () => {
		this.setState({ isLogin: !this.state.isLogin });
	};
=======
		data: "Context",
		isLogin: false,
	}

	login=()=>{
		this.setState({isLogin: !this.state.isLogin})
	}
>>>>>>> 344c4d2dad8b6566c3fc9eba097fc9e4e0d0af9b
	render() {
		return (
			<BrowserRouter>
				<div className='App'>
					<Navbar />
<<<<<<< HEAD
					<h1>{this.state.isLogin ? 'true' : 'false'}</h1>
					<button onClick={this.login}>login</button>
					<Route exact path='/' component={(props) => <Home {...props} name='home' />} />

					<MyContext.Provider value={this.state.users}>
						{this.state.isLogin && <Route path='/about' component={(props) => <About {...props} />} 
						name={this.state.users.name}/>}
					</MyContext.Provider>
=======
				<h1>{this.state.isLogin? "true" : "false"}</h1>
				<button onClick={this.login}>Login</button>
>>>>>>> 344c4d2dad8b6566c3fc9eba097fc9e4e0d0af9b

					<Route exact path='/' component={(props) => <Home {...props} name='home' />} />
                <MyContext.Provider value="React Context">
                
				{this.state.isLogin && 
					<Route path='/about' component={(props) => <About {...props} name='about' users={this.state.users}/>} /> }
			    
				</MyContext.Provider>	
					<Route path='/services' component={(props) => <Services {...props} count='5' />} />
					<Route path='/contact' component={Contact} />
					<Route path='/error404' component={Error404} />
<<<<<<< HEAD
=======
					<Redirect to='/error404' />
>>>>>>> 344c4d2dad8b6566c3fc9eba097fc9e4e0d0af9b
				</div>
			</BrowserRouter>
		);
	}
}


//data.json-i mej shat tvyalner qcel, u about-um bolor@ cuyc ta: heto meki vra seghmeluc heto verevi hasceum cuyc ta id-in(history-ovpush)