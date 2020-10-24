import React, { Component } from 'react'
import Developers from "./Developers"

export default class App1 extends Component {
    state={
    developers:[
        {_id:1,name:'Tigran',skils:"Html,css,JavaScript,React"},
        {_id:2,name:'Henry',skils:"Html,css,JavaScript,React"},
        {_id:3,name:'Sona',skils:"Html,css,JavaScript"},
        {_id:4,name:'Armen',skils:"Html,css,JavaScript"}
    ],
    hidden:false
    }
    handlerChange=()=>{
        this.setState({hidden:!this.state.hidden})
    }
    deleteDeveloper = (curentId) =>{
        let dev = [...this.state.developers];
        dev = dev.filter(elem => elem._id!== curentId)
        this.setState({developers : dev})
    }
    render() {
        const {hidden,developers} = this.state 
        return (
            <div>
                <button onClick={this.handlerChange}>Hidden Content</button>
               {!hidden && (
               developers.map(elem =>{
                   return <Developers
                   name={elem.name}
                   skils={elem.skils}
                   key={elem._id}
                   id={elem._id}
                   _onCklick={this.deleteDeveloper}/>
               })
               )} 
            </div>
        )
    }
}
