import React, { Component } from 'react'
import axios from 'axios'
import Users from './Users'


export default class App extends Component {

    state = {
        data:[],
        disabled:false,
        value:''
    }

componentDidMount = () =>{
    this.setState({disabled:true})
    axios({
        method:'get',
        url:'https://jsonplaceholder.typicode.com/users',
    })
    .then(res => {
        this.setState({data:res.data})
    })
    .catch(err => console.log(err))
}
// getAxios = () =>{
//     this.setState({disabled:true})
//     axios({
//         method:'get',
//         url:'https://jsonplaceholder.typicode.com/users',
//     })
//     .then(res => {
//         this.setState({data:res.data})
//     })
//     .catch(err => console.log(err))
// }


handlerChange= (e) =>{
    let value = e.target.value;
    this.setState({value});
    let newData = this.state.data
    let x = newData.filter(elem => elem.name.toLowerCase().includes(this.state.value.toLowerCase()))
    this.setState({data:x});
}

henlerClick = (id) =>{
    let newData = this.state.data
    let x = newData.filter(elem => elem.id !== id);
    this.setState({data:x})
}
    render() {
        const {data,value} = this.state
        return (
            <div>
                <button onClick={this.getAxios} >Axios</button>
                {data.length > 0 ? <Users options = {data} _onClick={(id)=> this.henlerClick(id)}/>: <h1>Loading...</h1>}
                <input
                 type='text'
                 onChange={this.handlerChange}
                 value={value}/>
            </div>
        )
    }
}
// disabled={disabled} {this.getAxios} sranic heto mi hate disabled {datai mej}
