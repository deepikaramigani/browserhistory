import './index.css'

const BrowserHistoryItem = props => {
  const {eachHistoryItem, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachHistoryItem

  const deleteHistory = () => {
    onDelete(id)
  }

  return (
    <li className="list-style">
      <div className="list-item">
        <p className="time-accessed">{timeAccessed}</p>
        <img src={logoUrl} className="domain-logo" alt="domain logo" />
        <p className="title">{title}</p>
        <p className="domain-url">{domainUrl}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-logo"
          onClick={deleteHistory}
          data-testid="delete"
        />
      </div>
    </li>
  )
}

export default BrowserHistoryItem
