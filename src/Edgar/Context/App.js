import React, { Component } from 'react'
import Context from './Context'
export const MyContext = React.createContext("xxx");

export default class App extends Component {
	render() {
		return (
			<div>
				<MyContext.Provider value={{
					name: "sad",
					age:25
				}}>
					<Context />
				</MyContext.Provider>
			</div>
		)
	}
}
