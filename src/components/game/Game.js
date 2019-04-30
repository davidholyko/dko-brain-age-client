import React, { Component, Fragment } from 'react'
// import { withRouter } from 'react-router-dom'

import QuestionController from '../questions/QuestionController'

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
          <QuestionController />
        </div>
      </div>
    )
  }
}

export default Game
