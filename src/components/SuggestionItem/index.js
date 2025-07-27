import './index.css'

const SuggestionsListItem = props => {
  const {suggestionsitem, clickArrow} = props
  const {suggestion} = suggestionsitem

  const onArrowClick = () => {
    clickArrow(suggestion)
  }

  return (
    <li className="list-item">
      <p>{suggestion}</p>
      <button type="button" className="arrow-btn">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
          onClick={onArrowClick}
        />
      </button>
    </li>
  )
}

export default SuggestionsListItem
