import React, { Component } from 'react'
import MyComponent from "./MyComponent"
import "./style.css"

export default class App extends Component {
    state = {
        questions: [
            {
                description: "React.js gradaran e te freymwork",
                answer: "React.js gradaran e",
                isOpen: false
            },
            {
                description: "React.js gradaran e te freymwork",
                answer: "React.js gradaran e",
                isOpen: false
            },
            {
                description: "React.js gradaran e te freymwork",
                answer: "React.js gradaran e",
                isOpen: false
            },
            {
                description: "React.js gradaran e te freymwork",
                answer: "React.js gradaran e",
                isOpen: false
            },
        ]
    }
    showDivHandler = (index) => {
        this.setState(this.state.questions.map((elem, i) => {
            if (i === index) {
                elem.isOpen = true
            } else {
                elem.isOpen = false
            }
            return elem
        }))
    }

    render() {
        const { questions } = this.state
        return (
            <div className="App">
                <div className="faqs"></div>
                {questions.map((faq, i) => (
                    <MyComponent faq={faq} key={i} index={i} toggleFAQ={(e) => this.showDivHandler(e)}></MyComponent>
                ))}

            </div>
        )
    }
}
