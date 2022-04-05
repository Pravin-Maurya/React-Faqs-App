import {Component} from 'react'

import './index.css'

const minusImg =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
const plusImg =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

class FaqItem extends Component {
  state = {
    isActive: false,
  }

  renderAnswer = () => {
    const {isActive} = this.state
    const {faqDetails} = this.props
    const {answerText} = faqDetails

    if (isActive) {
      return (
        <div>
          <hr className="horizontal-line" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  onClickToggleButton = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  renderActiveButton = () => {
    const {isActive} = this.state
    const imageButton = isActive ? minusImg : plusImg
    const altText = isActive ? 'minus' : 'plus'

    return (
      <button
        className="toggle-button"
        type="button"
        onClick={this.onClickToggleButton}
      >
        <img src={imageButton} alt={altText} className="img-button" />
      </button>
    )
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails

    return (
      <li className="faq-items">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          {this.renderActiveButton()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}
export default FaqItem
