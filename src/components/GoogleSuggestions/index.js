import {Component} from 'react'
import SuggestionsListItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchText: '',
  }

  onChangeSearchInput = event => {
    this.setState({
      searchText: event.target.value,
    })
  }

  clickArrow = suggestion => {
    this.setState({searchText: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchText} = this.state
    const searchResut = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchText.toLowerCase()),
    )
    console.log(searchText)
    return (
      <div className="google-search-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />
        <div className="suggestion-container">
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="search-input"
              onChange={this.onChangeSearchInput}
              value={searchText}
            />
          </div>
          <ul>
            {searchResut.map(eachItem => (
              <SuggestionsListItem
                suggestionsitem={eachItem}
                clickArrow={this.clickArrow}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
