import React, { Component, Fragment } from 'react'
// import { withRouter } from 'react-router-dom'

import QuestionController from '../questions/QuestionController'

class Game extends Component {
  constructor () {
    super()

    this.state = {
      score: 0,
      questionCount: 0
    }
  }

  componentDidMount () {}

  answerQuestionCorrectly = () => {
    let currentScore = this.state.score
    currentScore++
    this.setState({ score: currentScore })
  }

  incrementQuestionCount = () => {
    let currentQuestionCount = this.state.questionCount
    currentQuestionCount++
    this.setState({ questionCount: currentQuestionCount })
  }

  render () {
    const { score, questionCount } = this.state
    return (
      <div className="d-flex flex-column justify-content-center">
        <Fragment></Fragment>
        <h1 className="text-center">Game goes here</h1>
        <h1>Score {score}</h1>
        <h1>Question Count: {questionCount}</h1>
        <QuestionController
          incrementQuestionCount={this.incrementQuestionCount}
          answerQuestionCorrectly={this.answerQuestionCorrectly}/>
      </div>
    )
  }
}

export default Game
