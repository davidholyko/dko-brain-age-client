import React, { Component, Fragment } from 'react'
// import { withRouter } from 'react-router-dom'

import { knuthShuffle } from 'knuth-shuffle'

class MathQuestion extends Component {
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

  render () {
    const { question, answer, multipleChoice } = this.state
    return (
      <div className="d-flex flex-column justify-content-center">
        <Fragment></Fragment>
        <div className="game">
          <h1>{question}</h1>
          <h1>{answer}</h1>
          <div className="d-flex">
            {multipleChoice.map((item, index) => (
              <h1 key={item + index} className="bg-success px-2 mx-2 rounded">{item}</h1>)
            )}
          </div>
        </div>

      </div>
    )
  }
}

export default MathQuestion
