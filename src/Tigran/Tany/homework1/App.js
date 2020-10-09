import React, { Component } from 'react'
import One from './One'
import "./App.css"


export default class App extends Component {
  state = {
    questions: [
      { id: 1, question: "How are you" },
      { id: 2, question: "What is your name" },
      { id: 3, question: "how old are you?" }
    ],
    answers: [
      { id: 1, answer: "Fine thank you, and you?" },
      { id: 2, answer: "My name is Tigran" },
      { id: 3, answer: "I am 18" }
    ]
  }
  changeContent = (id) => {
    this.setState({
      questions: this.state.questions.map(question => {
        if (question.id !== id) return question
        return {
          question: this.state.answers.find(answer => answer.id === question.id).answer,
          id: question.id 
        }
      })
    })

  }
  render() {
    const { questions } = this.state
    return (
      <div>
        {questions.map(elem => {
          return <One
            key={elem.id}
            _id={elem.id}
            _question={elem.question}
            _changeContent={this.changeContent}
          />
        }
        )}
      </div>
    )
  }
}