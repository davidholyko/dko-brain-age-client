import React, { Component } from 'react'
// import { withRouter } from 'react-router-dom'

import { knuthShuffle } from 'knuth-shuffle'
import { icons } from '../../data/icons/Icons'

class QuestionShapes extends Component {
  constructor () {
    super()

    this.state = {
      shapes: 'triangle square pentagon hexagon heptagon octagon'.split(' '),
      question: [],
      answer: '',
      multipleChoice: []
    }
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

  generateProblem = () => {
    const { shapes } = this.state
    const startIndex = Math.random * 2 | 0
    const question = []
    let multipleChoice = []

    for (let i = 0; i < 5; i++) question.push(shapes[startIndex + i])

    const randomIndex = Math.random() * question.length | 0
    const answer = question[randomIndex]
    question[randomIndex] = 'question'

    for (let i = 0; i < 5; i++) {
      let currentShapes = shapes
      const random = Math.random() * currentShapes.length | 0
      multipleChoice.push(currentShapes[random])
      currentShapes = currentShapes.splice(random, 1)
    }

    multipleChoice = knuthShuffle(multipleChoice.slice(0))

    this.setState({ answer, question, multipleChoice })
  }

  componentDidMount () {
    this.generateProblem()
  }

  render () {
    const { question, multipleChoice } = this.state
    return (
      <div className="game">
        <div className="shapes">
          {question.map(shape => <img
            className="shape"
            key={shape + Math.random()}
            src={icons[shape]}
            alt=""/>)}
        </div>
        <div className="question-buttons">
          {multipleChoice.map(choice => (
            <button
              key={choice + Math.random()}
              onClick={this.handleClick}
              className="btn-question">
              {choice}
            </button>
          ))}
        </div>

      </div>
    )
  }
}

export default QuestionShapes
