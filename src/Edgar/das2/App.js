import React, { Component } from 'react'
import Child from './Child'
import './App.css'
export default class App extends Component {
	state = {
		data:[
			{
				title: "Marius Vulputate Cras Amet",
				body:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis soluta placeat autem"
			},
				{
					title: "Aliquam Hendrit Mi Metus",
				body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis soluta placeat autem"
			},
			{
				title: "Suspendisse Nullam Sodales",
				body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis soluta placeat autem"
			}
		]
	}
	render() {
		return (
			<div className="main">
				{
					this.state.data.map((elem,index) =>{
						return <Child key ={index} title={elem.title} body={elem.body}/>
					})
				}
			
			</div>
		)
	}
}
