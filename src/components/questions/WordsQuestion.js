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
      // get random word
      const randomWord = words[randomIndex]
      // add word into multiple choice array
      multipleChoice.push(randomWord)

      // push word into question array i number of times
      for (let x = 0; x < i; x++) question.push(randomWord)

      // removes selected word from words array to prevent duplicates
      words.splice(randomIndex, 1)
    }

    question = knuthShuffle(question.slice(0))
    multipleChoice = knuthShuffle(multipleChoice.slice(0))

    const answerIndex = Math.random() * 5 | 0
    const answer = multipleChoice[answerIndex]

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
        <div className="d-flex">
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
