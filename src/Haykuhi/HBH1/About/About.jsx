import React, { Component } from 'react';
// import Component2 from "./Component"

export default class About extends Component {
    render() {
        let params = this.props.match.params.name;
        let konkret = this.props.users.filter(elem => elem.name.toLowerCase() === params.toLowerCase());
        return (
            
            <>
            {konkret.length > 0 && konkret.map(elem) ? (
                  <>
                  <h1>Name is:{ konkret[0].name}</h1>
                  <h1>Phone is:{ konkret[0].phone}</h1>
                  <h1>City is:{ konkret[0].city}</h1>
                  </>
            ): <h1>Tenc mARD CHKA</h1> }
            </>
            
        )
    }
}