import React, { Component } from 'react'
import "./App.css"
import Skizb from './Skizb'
import Mejtex from "./Mejtex"
import Verj from "./Verj"

export default class App extends Component {
    render() {
        return (
            <div>
          <Skizb/>
          <Mejtex/>
          <Verj/>
                </div>
        )
    }
}
