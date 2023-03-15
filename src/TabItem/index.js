// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const clickTab = () => {
    setActiveTabId(tabId)
  }

  const tabClassButton = isActive ? 'tab-button active' : 'tab-button'

  return (
    <li className="tab-item">
      <button className={tabClassButton} type="button" onClick={clickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
