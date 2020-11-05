import React, { Component } from 'react'
import './App.css'
import data from "./data.json"
import Carts from "./Carts"

export default class App extends Component {
    state = {
        data:data.datas
    }
    render() {
        return (
            <div className="app">
                <h1>My SHOPPING BAG</h1>
                <div className="watch-wrapper">
                  <Carts data={data}/>
                </div>
            </div>
        )
    }
}
