import {Component} from 'react'

import BrowserHistoryItem from '../BrowserHistoryItem'

import './index.css'

const historyList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class BrowserHistory extends Component {
  state = {
    input: '',
    initialHistoryList: historyList,
    noHistory: true,
    search: false,
  }

  showResults = event => {
    this.setState({input: event.target.value})
  }

  deleteHistory = id => {
    const {initialHistoryList} = this.state
    const filteredList = initialHistoryList.filter(each => each.id !== id)
    this.setState({initialHistoryList: filteredList})
    if (filteredList.length === 0) {
      this.setState({noHistory: false})
    }
  }

  render() {
    const {initialHistoryList} = this.state
    const {input, noHistory, search} = this.state
    const searchResults = initialHistoryList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(input.toLowerCase()),
    )
    if (searchResults === 0) {
      this.setState({noHistory: false})
    }

    return (
      <div>
        <div className="logo-search-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            alt="search"
            className="search-container search-logo"
          />
          <input
            type="search"
            className="search-container input-style"
            placeholder="Search history"
            onChange={this.showResults}
          />
        </div>
        {noHistory ? (
          <div className="history-container">
            <ul>
              {searchResults.map(eachHistoryItem => (
                <BrowserHistoryItem
                  eachHistoryItem={eachHistoryItem}
                  key={eachHistoryItem.id}
                  onDelete={this.deleteHistory}
                />
              ))}
            </ul>
          </div>
        ) : (
          <p className="text">There is no history to show</p>
        )}
        {search && <p className="text">There is no history to show</p>}
      </div>
    )
  }
}

export default BrowserHistory
