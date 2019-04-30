import React, { Component, Fragment } from 'react'
// import { withRouter } from 'react-router-dom'

import { knuthShuffle } from 'knuth-shuffle'

class MathQuestion extends Component {
  constructor () {
    super()

    this.state = {
      words: 'dog cat horse rabbit cow person goat wizard jumped ran looked ate backed talked bit approached sleepy hungry angry excited curious tall happy bewildered green hastily quickly carefully slowly menacingly abruptly carelessly calmly run jumps quick often many one two three four house chair bed'.split(' '),
      question: [],
      answer: '',
      answerIndex: 0,
      multipleChoice: []
    }
  }

  generateProblem = () => {
    const { words } = this.state
    let question = []
    let multipleChoice = []

    for (let i = 0; i < 5; i++) {
      // get random index
      const randomIndex = Math.random() * words.length | 0
      // get random word using the random index
      const randomWord = words[randomIndex]
      // add random word into multiple choice array
      multipleChoice.push(randomWord)
      // push word into question array i number of times
      for (let x = 0; x < i; x++) question.push(randomWord)
      // removes selected word from words array to prevent duplicates
      words.splice(randomIndex, 1)
    }

    // select random index
    const answerIndex = Math.random() * 5 | 0
    // set the answer to that value
    const answer = multipleChoice[answerIndex]

    // shuffle question
    question = knuthShuffle(question.slice(0))
    // shuffle multipleChoice
    multipleChoice = knuthShuffle(multipleChoice.slice(0))

    this.setState({ question, multipleChoice, answer, answerIndex })
  }

  componentDidMount () {
    this.generateProblem()
  }

  render () {
    const { question, answer, answerIndex, multipleChoice } = this.state
    const s = answerIndex === 1 ? '' : 's'

    return (
      <div className="d-flex flex-column justify-content-center game">
        <Fragment></Fragment>
        <h1 className="bg-dark">Which word appears {answerIndex} time{s}?</h1>
        <div className="d-flex flex-wrap">
          {question.map((item, index) => (
            <h1 key={item + index} className="bg-success px-2 mx-2 rounded">{item}</h1>)
          )}
        </div>
        <h1 className="bg-info">{answer}</h1>
        <div className="d-flex">
          {multipleChoice.map((item, index) => (
            <h1 key={item + index} className="bg-success px-2 mx-2 rounded">{item}</h1>)
          )}
        </div>

      </div>
    )
  }
}

export default MathQuestion
