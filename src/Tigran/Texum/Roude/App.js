import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import About from './About';
import Blog from './Blog';
import Home from './Home';
import Navbar from './Navbar';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/" render={() => <Home title={"Home Page"} />} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
