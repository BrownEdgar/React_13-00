import React, { Component } from 'react'

export default class Services extends Component {
    state ={
        count : this.props.count
    }
    render() {
        return (
            <>
            <h1>{this.state.count}</h1>
            </>
        )
    }
}