import React, { Component } from 'react'
// import { withRouter } from 'react-router-dom'

import { knuthShuffle } from 'knuth-shuffle'

class QuestionMath extends Component {
  constructor () {
    super()

    this.state = {
      operators: ['+', '-', '*'],
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      operatorMethods: {
        '+': (x, y) => x + y,
        '-': (x, y) => x - y,
        '*': (x, y) => x * y
      },
      question: '',
      answer: '',
      multipleChoice: []
    }
  }

  operandOne = () => this.state.numbers[Math.random() * this.state.numbers.length | 0]
  operandTwo = () => this.state.numbers[Math.random() * this.state.numbers.length | 0]
  operator = () => this.state.operators[Math.random() * this.state.operators.length | 0]

  generateProblem = () => {
    const { operatorMethods } = this.state

    const operator = this.operator()
    const operandOne = this.operandOne()
    const operandTwo = this.operandTwo()

    const result = operatorMethods[operator](operandOne, operandTwo)
    // result of X operand Y
    const elements = [operandOne, operandTwo, result]
    // store operands and results
    const randomIndex = Math.random() * elements.length | 0
    // random index
    const answer = elements[randomIndex]
    // the value of the operand or result that will represent the answer after one is replaced with _
    elements[randomIndex] = '___'
    // replace an operand or result with blank
    const question = `${elements[0]} ${operator} ${elements[1]} = ${elements[2]}`
    // shuffle multipleChoice
    const multipleChoice = knuthShuffle([answer, answer - 1, answer + 2, answer * 3 - 3, answer * 4 + 4].slice(0))

    this.setState({ question, multipleChoice, answer })
  }

  componentDidMount () {
    this.generateProblem()
  }

  handleClick = () => {
    const { answerQuestionCorrectly, incrementQuestionCount } = this.props
    if (event.target.textContent === this.state.answer) {
      answerQuestionCorrectly()
      incrementQuestionCount()
    } else {
      incrementQuestionCount()
    }
  }

  render () {
    const { question, multipleChoice } = this.state
    return (
      <div className="game">
        <h1>{question}</h1>
        <div className="question-buttons">
          {multipleChoice.map((item, index) => (
            <button key={item + index + Math.random()}
              onClick={this.handleClick}
              className="btn-question">
              {item}
            </button>)
          )}
        </div>
      </div>

    )
  }
}

export default QuestionMath
