import React, {Component} from 'react';

class Child extends Component{
    

    render(){
        return(
            <h1> Component {this.props.updates} </h1> 
        )
    }
}

export default Child;