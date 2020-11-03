import React, { Component } from 'react'
import Context from './Context'
import './Style.css'
export const MyContext = React.createContext("xxx");

export default class App extends Component {
	render() {
		return (
			<div>
				<>
					<h1 className='title'>Info</h1>
					<div className='box'>
						<MyContext.Provider value={{
							name: "Name: Henry",
							surname: "Surname: Ghambaryan",
							age: 'Age: 19',
							email: "E-mail: ghambaryanh@gmail.com",
							phone: "Phone: +374(33)-32-1X-XX)"
						}}>
							<Context />
						</MyContext.Provider>
					</div>
					<div className='box'>
						<MyContext.Provider value={{
							name: "Name: Tigran",
							surname: "Surname: Bambukyan",
							age: 'Age: 19',
							email: "E-mail: bambukyan.tiko@gmail.com",
							phone: "Phone: +374(94)-87-7X-XX)"
						}}>
							<Context />
						</MyContext.Provider>
					</div>
				</>
			</div>
		)
	}
}