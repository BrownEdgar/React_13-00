import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AxiosComponent() {
	const [ email, setEmail ] = useState([]);
	const [favorit, setfavorit ] = useState([]);

	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/comments')
			.then((res) => {
				console.log(res);
				setEmail(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const ClickDotCom = () => {
			 
				let r = email.filter(elem => elem.email.endsWith('.com'))
				console.log(r);
				
	 };
	 const ClickDotBiz = (e) => {
		 let r = email.filter(elem => elem.email.endsWith('.biz'))
		 console.log(r);
		
	   };
	return (
		<div>
			<button type='button' onClick={ClickDotCom}>
				Mails with .com
			</button>
			<button type='button' onClick={ClickDotBiz}>
				Mails with .biz
			</button>
			<div>
				<ul>{email.map((emails) => <li key={emails.id}>{emails.email}</li>)}</ul>
			</div>
		</div>
	);
}
