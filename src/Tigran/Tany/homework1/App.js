import React, { Component } from 'react'
import One from './One'


export default class App extends Component {
  state = {
    questions: [
			{ id: 0, question: "How are you", answer: "Fine thank you, and you?",show:false },
			{ id: 1, question: "What is your name", answer: "My name is Tigran",show:false },
			{ id: 2, question: "how old are you?", answer: "I am 18",
			show:false  }
    ],	
  }
  changeContent = (id) => {
		let questions = [...this.state.questions]
		questions[id].show = !questions[id].show;
		this.setState({ questions })

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
						_answer={elem.answer }
						show={elem.show}
            _changeContent={this.changeContent}
          />
        }
        )}
      </div>
    )
  }
}