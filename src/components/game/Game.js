import React, { Component, Fragment } from 'react'
// import { withRouter } from 'react-router-dom'

import MathQuestion from '../questions/MathQuestion'
import WordsQuestion from '../questions/WordsQuestion'

class Game extends Component {
  constructor () {
    super()

    this.state = {

    }
  }

  componentDidMount () {}

  render () {
    return (
      <div className="d-flex flex-column justify-content-center">
        <Fragment></Fragment>
        <h1 className="text-center">Game goes here</h1>
        <div className="game">
          <h1>Question here</h1>
          <MathQuestion />
          <WordsQuestion />
        </div>

      </div>
    )
  }
}

export default Game
