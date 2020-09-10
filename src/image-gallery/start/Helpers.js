import axios from "axios"
let arr = [];
export const x = ()=>{

	let r =  axios(`https://jsonplaceholder.typicode.com/photos?_limit=10`)
	.then((data)=> data)
	.then(getUrl)
	return r;

}
function getUrl(data) {
	console.log(data);
	data.data.forEach(element =>{
		arr.push(element.url)
	})
	return arr;
}