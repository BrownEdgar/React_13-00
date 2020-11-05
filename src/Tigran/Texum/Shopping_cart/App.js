import React, { Component } from 'react'
import "./App.css"
import data from "./data.json"
import carts from "./Carts"
import Carts from './Carts'

export default class App extends Component {
    state = {
        data:data.datas
    }
    render() {
        const {data}= this.state
        return (
            <div className="app">
                    <h1>My shopping bag</h1>
                <div className="shoppingBag">
                    <Carts data={data}></Carts>
                </div>
            </div>
        )
    }
}
