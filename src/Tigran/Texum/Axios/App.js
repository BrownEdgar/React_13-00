import React, { Component } from 'react'
import axios from "axios"
import Users from './Users'

export default class App extends Component {
    state = {
        data: [],
        value: ""
    }
    componentDidMount() {
        this.setState({ disabled: true })
        axios({
            mathod: "get",
            url: "https://jsonplaceholder.typicode.com/users",

        })
            .then(res => {
                this.setState({
                    data: res.data
                })
            })
            .catch(err => console.log(err))
    }
    handerChange = (e) => {
        let value = e.target.value
        this.setState({ value })
        let newdata = this.state.data
        let x = newdata.filter(elem => elem.name.includes(this.state.value))
        this.setState({ data: x })
    }
    handerClick=(id)=>{
        let newdata = this.state.data
        let x = newdata.filter(elem => elem.id !== id)
        this.setState({ data: x })
    }
    render() {
        const { data, value } = this.state
        return (
            <div>
                <button onClick={this.getAxios}>Axios</button>
                {data.length > 0 ? <Users options={data}  _onClick={(id)=>this.handerClick(id)}/> : <h1>LOADING</h1>}
                <input type="text"
                    onChange={this.handerChange}
                    value={value} />
            </div>
        )
    }
}
