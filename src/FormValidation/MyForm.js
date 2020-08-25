import React, { Component } from 'react'

export default class MyForm extends Component {
    constructor(props){
        super(props);
        this.state ={
            name: "",
            email:"",
            password:'',
            confirmpassword:"",
            nameError:"",
            emailError:'',
            passwordError:'',
            confirdpasswordError:"",
            isShow:false
        }
    }
    handleChange = (e) =>{
        this.setState({ [e.target.name]:e.target.value  });
    }
    hesh = (password) =>{
        let new_password= ''
        for(let char in password ){
            new_password+=password.charCodeAt(char)
            
        }
        console.log(new_password);
        return new_password
    }
    validate = () =>{
        let nameError = "";
        let emailError = "";
        let passwordError = "";
        let confirdpasswordError = "";
        if(this.state.name.match(/[0-9]/g) !== null){
            nameError = "invalid name"
        }
        if(!this.state.email.endsWith('.com')){
            emailError = "invalid email"
        }
        if(this.state.password.match(/[A-Z]/g) === null){
            passwordError= "passwordy petq e parunaki mecatar"
        }
        if(!Object.is(this.state.password,this.state.confirmpassword)){
            confirdpasswordError = "Passvordnery chen hamynknum"
        }

        let password = this.hesh("abc")
        this.setState({password});
        if(nameError || emailError || passwordError ||confirdpasswordError){
            this.setState({ 
                nameError, 
                emailError,
                passwordError,
                confirdpasswordError});
            return false;
        }
        return true;




    }

    onSubmit = (e) =>{
        e.preventDefault()

        let isValid = this.validate()
        if(isValid){
            console.log(isValid);
            console.log({
                name:this.state.name,
                email:this.state.email,
                password:this.state.password,
            });
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>

                    <input 
                    type="text"
                    name="name" 
                    value={this.state.name}
                    onChange={this.handleChange}/>
                    <div className="feedBack">{this.state.nameError}</div>
                    <input 
                    type="email"
                    name="email" 
                    value={this.state.email}
                    onChange={this.handleChange}/>  
                    <div className="feedBack">{this.state.emailError}</div>

                    <input 
                    type="password"
                    name="password" 
                    value={this.state.password}
                    onChange={this.handleChange}
                    autoComplete="off"/>  
                    <div className="feedBack">{this.state.passwordError}</div>


                    <input 
                    type="password"
                    name="confirmpassword" 
                    value={this.state.confirmpassword}
                    onChange={this.handleChange}
                    autoComplete="off" />  
                    <div className="feedBack">{this.state.confirdpasswordError}</div>
                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }
}
