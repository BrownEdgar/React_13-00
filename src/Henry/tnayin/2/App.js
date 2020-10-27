import React, { Component } from 'react'
import Child from './Child'

export default class App extends Component {

    state={
        pizza:[
        {_id = 0,name:"Peperoni"},
        {_id = 1,name:"four cheeses"},
        {_id = 2,name:"Margherita"},
        {_id = 3,name:"Carbonara"}
    ],
        count:0
    }

    piceCount = (n) => {
        if(n === 0){
            this.setState({count:0})
        }else{
            this.setState({ count: this.state.count + n })
        }
    }
    render() {
        const { name } = this.state
        return (
            <ul>
                {pizza.map(elem => {
                    return <Child
                    name = {elem.name}
                    key={elem._id}
                    id={elem._id}/>
                })}
                
                <button onClick={() => this.piceCount(1)}>+</button>
                
            </ul>
        )
    }
}
