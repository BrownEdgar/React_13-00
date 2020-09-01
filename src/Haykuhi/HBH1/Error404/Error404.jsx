import React, { Component } from 'react'

export default class Error404 extends Component {
    goToHomePage = () => {
        this.props.history.push({
            pathname: '/'
        })
    }
    render() {
        return (
            <div>
                <h1>Error 404</h1>
                <button
                    onClick={this.goToHomePage}
                    >Go to Home page</button>
            </div>
        )
    }
}