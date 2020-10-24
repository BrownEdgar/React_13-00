import React, { Component } from 'react'
import axios from 'axios'
import Users from './Users'
export default class App extends Component {
	state = {
		data: [],
		disabled:false,
		value: ""
	}


componentDidMount() {
	console.log('componentDidMount');
	axios({
		method: "get",
		url: `https://jsonplaceholder.typicode.com/users`,
	})
		.then(res => {
			this.setState({ data: res.data });
		})
		.catch(err => console.log(err))
}

	handlerChange = (e) =>{
		let value = e.target.value;
		this.setState(prevstate => {
			return { value }
		});
		let newdata = this.state.data
		let x = newdata.filter(elem => elem.name.toLowerCase().includes(this.state.value.toLowerCase()));
		this.setState({ data: x });
	}
	handleClick = (id) => {
		axios({
			method: "delete",
			url: `https://jsonplaceholder.typicode.com/users/${id}`,
		}).then(res => console.log(res.status))
	}
	render() {
		const { data, value} = this.state;
		return (
			<div>
				<h1>Axios course</h1>
				<button >Axios</button>
				{data.length > 0 ? <Users options={data} _onClick={(id)=> this.handleClick(id)}/> : <h1>Loadding...</h1>}
				<input 
				type="text" 
				onChange={this.handlerChange}
				value={value}/>
			</div>
		)
	}
}
