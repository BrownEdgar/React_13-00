import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AxiosComponent() {
	const [ email, setEmail ] = useState([]);

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
	  if (email[2].email.endsWith('.com')) {
	  	console.log('ok');
	  }
	  else{
		  console.log('sxal');
	  }
	 };
	 const ClickDotBiz = (e) => {
		// if (email[2].email.endsWith('.biz')) {
		// 	console.log('ok');
		// }
		// else{
		// 	console.log('sxal');
		// }
		setEmail(email)
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
