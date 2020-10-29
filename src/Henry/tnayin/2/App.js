import React, { Component } from 'react'
import Child from './Child'
import './index.css'

export default class App extends Component {

    state={
        pizza:[
<<<<<<< HEAD
        {_id:0,name:"Peperoni"},
        {_id:1,name:"four cheeses"},
        {_id:2,name:"Margherita"},
        {_id:3,name:"Carbonara"}
=======
        {_id: 0,name:"Peperoni"},
        {_id: 1,name:"four cheeses"},
        {_id: 2,name:"Margherita"},
        {_id: 3,name:"Carbonara"}
>>>>>>> 4977f2ff3d0e809a19d1b6c2f1754697206cb9c1
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
<<<<<<< HEAD
        const { pizza,count } = this.state
        return (
            <ul>
                {pizza.map(elem => {
                    return <Child
                    name = {elem.name}
                    key={elem._id}
                    id={elem._id}/>
                })}
                <h1>{count}</h1>
                <button onClick={() => this.piceCount(1)}>+</button>
                <button onClick={() => this.piceCount(-1)}>-</button>
                <button onClick={() => this.piceCount(0)}>0</button>
            </ul>
=======
			const { pizza,count } = this.state
        return (
       <>
						<ul>
							{pizza.map(elem => {
								return <Child
									name={elem.name}
									key={elem._id}
									id={elem._id} />
							})}
						</ul>
						<h1>{count}</h1>
							<button onClick={() => this.piceCount(1)}>+</button>
			 </>
>>>>>>> 4977f2ff3d0e809a19d1b6c2f1754697206cb9c1
        )
    }
}
