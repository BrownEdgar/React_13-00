import React, { Component } from 'react'
import Child from "./Child"

export default class App extends Component {
  state = {
    value: "",
    title: "",
    valueForSelect: "Java_Script"
  }
  handleChangeForSelect = (event, option) => {
    if (option === "input") {
      this.setState({value:event.target.value})
    }
    else {
      this.setState({valueForSelect:event.target.value})
    }
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({ title: this.state.value })
  }
  render() {
    return (
      <div>
        <Child
          _handleChange={(e)=>this.handleChangeForSelect(e,"input")}
          _handleSubmit={this.handleSubmit}
          value={this.state.value}
        />
        <label>
          Ընտրեք Ձեր սիրած լեզուն:
                <select value={this.state.valueForSelect} onChange={(e)=>this.handleChangeForSelect(e,"select")}>
            <option value="React.js">React.js</option>
            <option value="Java_Script">Java Script</option>
            <option value="Html_Css">Html Css</option>
            <option value="Hayeren">Hayeren</option>
          </select>
        </label>
      </div>
    )
  }
}
