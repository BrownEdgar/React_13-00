import React, { Component } from 'react'
import "./App.css"
import Input from "./Inout/Input"
import Button from "./Button/Button"
import axios from "axios"

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const API_KEY = process.env.REACT_APP_API_KEY

export default class App extends Component {
    state = {
        isFormValid: false,
        forControls: {
            //mail inputi sax infon
            email: {
                value: "",
                type: "email",
                label: "Enter your Email",
                errorMessage: "invalid E-mail",
                //grel durs galuc heto nayuma chihta te che
                valid: false,
                //mechy lini mardy nor
                touched: false,
                validation: {
                    //partadira lracman hamar
                    requiered: true,
                    email: true
                }
            },
            password: {
                value: "",
                type: "password",
                label: "Enter your password",
                errorMessage: "invalid password",
                valid: false,
                touched: false,
                validation: {
                    requiered: true,
                    minLength: 7,
                    hasNumber: true,
                }
            }
        }
    }
    validateControl = (value, validation) => {
        if (!validation) return true;
        let isValid = true;
        if (validation.requiered) {
            isValid = value.trim() !== "" && isValid
        }
        if (validation.email) {
            isValid = validateEmail(value) && isValid
        }
        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid
        }
        if (validation.hasNumber) {
            isValid = value.match(/[0-9]/g) && isValid
        }
        return isValid
    }

    hendersubmit = (e) => {
        e.preventDefault()
    }

    renderInput = () => {
        return Object.keys(this.state.forControls).map((controlName, index) => {
            const control = this.state.forControls[controlName]
            return (
                <Input
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    errorMessage={control.errorMessage}
                    shouldValidate={!!control.validation}
                    onChange={(event) => this.onChangeHandler(event, controlName)}
                />
            )
        })
    }
    onChangeHandler = (event, controlName) => {
        const forControls = { ...this.state.forControls }
        const control = { ...this.state.forControls[controlName] }
        control.value = event.target.value
        control.touched = true
        control.valid = this.validateControl(control.value, control.validation)
        forControls[controlName] = control
        let isFormValid = true
        Object.keys(forControls).forEach(element => {
            isFormValid = forControls[element].valid && isFormValid
        })
        this.setState({ forControls, isFormValid })

    }
    registerHandler = async () => {
        const data = {
            email: this.state.forControls.email.value,
            password: this.state.forControls.password.value,
            returnSecureToken: true

        }
        try {
            let response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, data)
            console.log(response)
        } catch (err) {
            console.error(err)
        }
    }
    logiHadler = async () => {
        const data = {
            email: this.state.forControls.email.value,
            password: this.state.forControls.password.value,
            returnSecureToken: true

        }
        try {
            let response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, data)
            console.log(response)
        } catch (err) {
            console.error(err)
        }
    }

    render() {
        return (
            <div className="main">
                <h1>Authorisation</h1>
                <form onSubmit={this.hendersubmit} className="authForm">
                    {this.renderInput()}
                    <Button tyoe="success"
                        onClick={this.logiHadler}
                        disabled={!this.state.isFormValid}>Sign in</Button>
                    <Button tyoe="primery"
                        onClick={this.registerHandler}
                        disabled={!this.state.isFormValid}>Register</Button>
                </form>
            </div>
        )
    }
}

