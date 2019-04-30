import React, { Component, Fragment } from 'react'
// import { withRouter } from 'react-router-dom'

import { knuthShuffle } from 'knuth-shuffle'

class SentenceQuestion extends Component {
  constructor () {
    super()

    this.state = {
      nouns: 'dog cat horse rabbit cow elf goat wizard'.split(' '),
      verbs: 'hit ran from saw picked up moved sat on ate met'.split(' '),
      adjectives: 'sleepy hungry angry blue curious tall happy red green'.split(' '),
      adverbs: 'finally often never slowly boldly always rarely calmly'.split(' '),
      question: '',
      answer: '',
      answerIndex: 0,
      multipleChoice: []
    }
  }

  generateProblem = () => {
    const { nouns, verbs, adjectives, adverbs } = this.state

    const subject = nouns[Math.random() * nouns.length | 0]
    const object = nouns[Math.random() * nouns.length | 0]
    const verb = verbs[Math.random() * verbs.length | 0]
    const adverb = adverbs[Math.random() * adverbs.length | 0]
    const subjectAdjective = adjectives[Math.random() * adjectives.length | 0]
    const objectAdjective = adjectives[Math.random() * adjectives.length | 0]

    const sentence = [
      { word: subjectAdjective, type: 'adjectives' },
      { word: subject, type: 'nouns' },
      { word: adverb, type: 'adverbs' },
      { word: verb, type: 'verbs' },
      { word: objectAdjective, type: 'adjectives' },
      { word: object, type: 'nouns' }
    ]
    const randomIndex = Math.random() * sentence.length | 0
    const answer = sentence[randomIndex]
    sentence[randomIndex] = { word: '_____', type: answer.type }
    const options = {
      0: nouns,
      1: verbs,
      2: adjectives,
      3: adverbs,
      nouns,
      verbs,
      adjectives,
      adverbs }
    let wordBank = []

    const question = `The ${sentence[0].word} ${sentence[1].word} ${sentence[2].word} ${sentence[3].word} the ${sentence[4].word} ${sentence[5].word}`

    // adds all words to wordBank
    for (let i = 0; i < 4; i++) { wordBank = wordBank.concat(options[i]) }

    // filters out words of the same part of speech from wordBank
    const answerType = options[answer.type]
    wordBank = wordBank.filter(word => !answerType.includes(word))

    let multipleChoice = [answer.word]
    for (let i = 0; i < 4; i++) { multipleChoice.push(wordBank[Math.random() * wordBank.length | 0]) }

    multipleChoice = knuthShuffle(multipleChoice.slice(0))

    this.setState({ question, multipleChoice, answer })
  }

  componentDidMount () {
    this.generateProblem()
  }

  render () {
    const { question, answer, answerIndex, multipleChoice } = this.state
    const s = answerIndex === 1 ? '' : 's'

    console.log(this)

    return (
      <div className="d-flex flex-column justify-content-center game bg-warning">
        <Fragment></Fragment>
        <h1 className="bg-dark">Which word appears {answerIndex} time{s}?</h1>
        <div className="d-flex flex-wrap justify-content-center">
          {question.split(' ').map((item, index) => (
            <h1 key={item + index} className="bg-success px-2 m-0">{item}</h1>)
          )}
        </div>
        <h1 className="bg-info">{answer.word}</h1>
        <div className="d-flex">
          {multipleChoice.map((item, index) => (
            <h1 key={item + index} className="bg-success px-2 mx-2 rounded">{item}</h1>)
          )}
        </div>

      </div>
    )
  }
}

export default SentenceQuestion
