import React, { Component } from 'react'
import Navbar from './Navbar'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import Cars from './Cars'

export default class App extends Component {
    state = {
        cars:[
            {
                id:1,
                Name:"BMW",
                year:"2018",
                model:"M4",
                price:"60000$",
                img:"https://images.unsplash.com/photo-1600024247066-5f170a2a5057?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            },
            {
                id:2,
                Name:"Mercedes",
                year:"2018",
                model:"S63 AMG coupe",
                price:"90000$",
                img:"https://images.unsplash.com/photo-1594352041714-9c20bfde3143?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=621&q=80"
            },
        ]
    }
    render() {
        return (
            <Router>
            <div>
               <Navbar/>
               <Route exact path='/' component={Home}/> 
               <Route path='/cars' render={(props)=><Cars props={props} carOptions={this.state.cars}/>}/> 
               <Route path='/contact' component={Contact}/> 
               <Redirect to={'/'}/>
            </div>
            </Router>
        )
    }
}
