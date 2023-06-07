// Write your code here
import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = props => {
  const {children} = props
  return (
    <div className="success-container">
      {children}
      <GrFormClose className="close-logo" />
    </div>
  )
}
export default Notification
