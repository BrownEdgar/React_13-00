import React, { Component } from 'react'

export default class App extends Component {
  state = {
    fullName: ""
  }
  handleSubmit = (event) => {
    event.preventDefault()
  }
  inputChnage = (event) => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    const { fullName } = this.state
    return (
      <div>
        <p>{fullName}</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Type Something" name="fullName" onChange={this.inputChnage} />
          <button>Sand Massage</button>
        </form>
      </div>
    )
  }
}
