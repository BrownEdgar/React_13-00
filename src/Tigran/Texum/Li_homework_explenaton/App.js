import React, { Component } from 'react'
import Developers from "./Developers"

export default class App extends Component {
  state = {
    developers: [
      { id: 1, name: "Tigran", skils: "React.js" },
      { id: 2, name: "Armen", skils: "Html-Css" },
      { id: 3, name: "Sona", skils: "JavaScript" }
    ],
    hidden: false
  }
  handerChange = () => {
    this.setState({
      hidden: !this.state.hidden
    })
  }
  deleteDeveloper = (currentId) => {// currentId mej nstuma id vori vra click enq are
    let dev = [...this.state.developers] //clonavorecinq
    dev = dev.filter(elem => elem.id !== currentId)//nkaruma sax baci nranic vori vra click enq are
    this.setState({//esel petqa vor jnjvi cloick aneluc
      developers: dev
    })

  }
  render() {
    const { hidden, developers } = this.state
    return (
      <div>
        <button onClick={this.handerChange}>Hide</button>
        {!hidden && (
          developers.map(elem => {
            return <Developers
              name={elem.name}
              skils={elem.skils}
              key={elem.id}
              id={elem.id}
              _onClick={this.deleteDeveloper}
            />
          })
        )}
      </div>
    )
  }
}
