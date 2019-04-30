import React, { Component } from 'react'
// import { withRouter } from 'react-router-dom'

import QuestionMath from '../questions/QuestionMath'
import QuestionWords from '../questions/QuestionWords'
import QuestionShapes from '../questions/QuestionShapes'
import QuestionSentence from '../questions/QuestionSentence'

class QuestionController extends Component {
  constructor () {
    super()

    this.state = {

    }
  }

  componentDidMount () {
  }

  render () {
    const { incrementQuestionCount, answerQuestionCorrectly } = this.props

    const questions = [
      <QuestionMath key="1"
        incrementQuestionCount={incrementQuestionCount}
        answerQuestionCorrectly={answerQuestionCorrectly} />,
      <QuestionWords key="2"
        incrementQuestionCount={incrementQuestionCount}
        answerQuestionCorrectly={answerQuestionCorrectly} />,
      <QuestionShapes key="4"
        incrementQuestionCount={incrementQuestionCount}
        answerQuestionCorrectly={answerQuestionCorrectly} />,
      <QuestionSentence key="4"
        incrementQuestionCount={incrementQuestionCount}
        answerQuestionCorrectly={answerQuestionCorrectly} />
    ]
    return (
      <div className="d-flex flex-column justify-content-center game bg-primary">
        {questions[Math.random() * 4 | 0]}
      </div>

    )
  }
}

export default QuestionController
