import React, {Component} from 'react'
import './App.css'
import { Redirect } from 'react-router-dom';


class Form extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            email:"",
            password:"",
            Errorname:"",
            Erroremail:"",
            Errorpassword:""
        }
    }

    handlechande = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }
    handlesubmit = (e) =>{
        e.preventDefault();
        const isvalid = this.validat();
        if(isvalid){
            console.log(this.state)
        } 
    }
    validat = () =>{
       let Errorname="";
       let Erroremail="";
       let Errorpassword="";

       if(!this.state.name.includes(".")){
           Errorname = "invalid name";
       }
       if(Errorname){
           this.setState({Errorname});
           return false;
       }
       return true;
    }
    render(){
         return(
            <form onSubmit ={this.handlesubmit}>
            <div>
                    <input 
                    type="text"
                    name="name"
                    placeholder="name"
                    value={this.state.name}
                    onChange={this.handlechande}
                    />
                    <div style={{color:"red", fontSize:12}}>{this.state.Errorname}</div>
            </div>
            <div>
                    <input 
                    type="email"
                    name="email"
                    placeholder="email"
                    value={this.state.email}
                    onChange={this.handlechande}
                    />
                    <div style={{color:"red", fontSize:12}}>{this.state.Erroremail}</div>
            </div>
            <div>
                    <input 
                    type="password"
                    name="password"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.handlechande}
                    />
                    <div style={{color:"red", fontSize:12}}>{this.state.Errorpassword}</div>
            </div>
            <button type="submit">Submit</button>
            </form>
            
           
         )
    }
}

export default Form