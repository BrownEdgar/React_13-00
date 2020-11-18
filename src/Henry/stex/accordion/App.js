import React, { Component } from 'react'
import "./style.css"
import MyComponent from './MyComponent'

export default class App extends Component {
    state = {
        questions:[
            {
                discription:"React.js- y gradaran e te framework?",
                answer:"React.js gradaran e",
                isOpen:false
            },
            {
                discription:"React.js- y gradaran e te framework?",
                answer:"React.js gradaran e",
                isOpen:false
            },
            {
                discription:"React.js- y gradaran e te framework?",
                answer:"React.js gradaran e",
                isOpen:false
            },
            {
                discription:"React.js- y gradaran e te framework?",
                answer:"React.js gradaran e",
                isOpen:false
            },
        ]
    }
    showDivHandler = (index) =>{
        this.setState(this.state.questions.map((elem,i) =>{
            if (i === index) {
                elem.isOpen = !elem.isOpen
            }else{
                elem.isOpen=false
            }
            return elem
        }))
    }
    render() {
        const questions = this.state.questions
        return (
            
            <div className="App">
                <div className="faqs">
                    {questions.map((faq,i) => (
                        <MyComponent faq={faq} key = {i} index={i} toggleFAQ={(e) => this.showDivHandler(e)}/>
                    ))}
                </div>
            </div>
        )
    }
}
