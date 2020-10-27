import React, { Component } from 'react'
import { createElement } from 'react'

export default class App extends Component {
    state = {
        name1: "",
				name2: "",
				equal:""
    }
    submiter = (event) => {
        event.preventDefault()
    }
    changContent = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    } 

    checkEquality=(event)=>{
			if (this.state.name1 === this.state.name2){
				this.setState({ equal: 'equal' });
        }else{
				this.setState({ equal: 'Havasar' });
				}
    }
    render() {
			const { name1,name2,equal} = this.state;
        return (
            <div>
						<input type="text" value={name1} name='name1' onChange={this.changContent}/>
						<input type="text" value={name2}  name='name2' onChange={this.changContent}/>
              <input type="submit" value="Compare" onClick={this.checkEquality}/>
						<h1>{equal}</h1>
            </div>
        )
    }
}
