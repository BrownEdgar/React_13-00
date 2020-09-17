import axios from "axios"
export default function x (){
	return axios.get('https://jsonplaceholder.typicode.com/comments')
		.then((res) => {
			return res;
		})
		.catch((err) => {
			console.log(err);
		});
}