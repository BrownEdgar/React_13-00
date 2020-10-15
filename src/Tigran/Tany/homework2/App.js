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
        //chgitem vonc es popxakany bazmativ sarqem mpaov porcum em chi stacvum errora berum dra hamar tesqi hamar senc em toxum
        <h1>{fullName} {fullName} {fullName} {fullName} {fullName} {fullName} {fullName} {fullName} {fullName} {fullName} {fullName} {fullName} {fullName} {fullName} {fullName} {fullName}</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Type Something" name="fullName" onChange={this.inputChnage} />
          <button>Sand Massage</button>
        </form>
      </div>
    )
  }
}
