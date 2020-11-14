import React, { Component } from 'react'
import "./App.css"
import Helpers from "./Helpers"

export default class App extends Component {
    render() {
        return (
            <div id="box">
          <div id='first'>
              <h1>"</h1>
            <p>Nunc consectetur a nunc vitae pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque eu ullamcorper mauris. Aenean convallis, ligula eu dignissim commodo, sem ligula vulputate dui, eget auctor</p>
            <h3>Roman Level / AppName</h3>  
          </div>
          <div id='second'>
          <h1>"</h1>
            <p>Nunc consectetur a nunc vitae pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque eu ullamcorper mauris. Aenean convallis, ligula eu dignissim commodo, sem ligula vulputate dui, eget auctor</p>
            <h3>Diana Rinzuk / AppName</h3>
          </div>
          <div id='third'>
          <h1>"</h1>
          <p>Nunc consectetur a nunc vitae pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque eu ullamcorper mauris. Aenean convallis, ligula eu dignissim commodo, sem ligula vulputate dui, eget auctor</p> 
          <h3>Ben Stafford / AppName</h3>
          </div>
          <Helpers/>
                </div>
        )
    }
}
