import React, { Component, Fragment } from 'react'
// import { withRouter } from 'react-router-dom'

// import { knuthShuffle } from 'knuth-shuffle'
import { icons } from '../../data/icons/Icons'

class ShapesQuestion extends Component {
  constructor () {
    super()

    this.state = {
      shapes: 'triangle square pentagon hexagon heptagon octagon'.split(' '),
      question: [],
      answer: '',
      multipleChoice: []
    }
  }

  generateProblem = () => {
    const { shapes } = this.state
    const startIndex = Math.random * 2 | 0
    const multipleChoice = []

    for (let i = 0; i < 5; i++) multipleChoice.push(shapes[startIndex + i])

    const randomIndex = Math.random() * multipleChoice.length | 0
    const answer = multipleChoice[randomIndex]
    multipleChoice[randomIndex] = 'question'

    const question = multipleChoice

    this.setState({ answer, question, multipleChoice })
  }

  componentDidMount () {
    this.generateProblem()
  }

  render () {
    const { question, answer, multipleChoice } = this.state
    return (
      <div className="d-flex flex-column justify-content-center bg-danger">
        <Fragment></Fragment>
        <div className="d-flex flex-wrap">
          {question.map(shape => <img key={shape + Math.random()} src={icons[shape]} alt=""/>)}
        </div>
        <h1>{answer}</h1>
        <div className="d-flex flex-wrap">
          {multipleChoice.map(choice => (
            <h1 key={choice + Math.random()} className="bg-warning px-2 mx-2 rounded">{choice}</h1>
          ))}
        </div>

      </div>
    )
  }
}

export default ShapesQuestion
