import React, { Component } from 'react'

export default class ErrHandler extends Component {
    state = {
        error : false
    }
    componentDidCatch(error, info) {
        console.log({error,info})
        this.setState({error:true})
    }
    render() {
        if(this.state.error){
            return <h1>miban en chi</h1>
        }
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
