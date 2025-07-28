import {Component} from 'react'
import UserProfile from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {
    searchText: '',
  }

  onChangeSearchInput = event => {
    this.setState({
      searchText: event.target.value,
    })
  }

  render() {
    const {destinationsList} = this.props
    const {searchText} = this.state
    const searchResult = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchText.toLowerCase()),
    )
    return (
      <div className="destiantion-container">
        <h1 className="container-heading">Destination Search</h1>
        <div className="search-container">
          <input
            type="search"
            className="search-input"
            placeholder="Search"
            onChange={this.onChangeSearchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
            alt="search icon"
            className="search-icon"
          />
        </div>
        <div className="list-container">
          <ul className="list-item-container">
            {searchResult.map(eachItem => (
              <UserProfile userDetail={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
