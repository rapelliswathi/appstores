// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {imageURL, appName} = appDetails
  return (
    <>
      <li className="app-item-container">
        <img className="app-item-image" src={imageURL} alt={appName} />
        <div className="app-item-details-container">
          <p className="app-item-name">{appName}</p>
        </div>
      </li>
    </>
  )
}

export default AppItem
