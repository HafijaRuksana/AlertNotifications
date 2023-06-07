// Write your code here

import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotification = () => (
  <div className="notification-app">
    <h1 className="heading">Alert Notifications</h1>
    <Notification className="notification">
      <div className="icon-message">
        <AiFillCheckCircle className="success-logo" />

        <div>
          <h1 className="success-heading">Success</h1>
          <p>You can access all the files in the folder</p>
        </div>
      </div>
    </Notification>

    <Notification>
      <div className="icon-message">
        <RiErrorWarningFill className="error-logo" />
        <div>
          <h1 className="error-heading">Error</h1>
          <p>Sorry, you are not authorized to have access to delete the file</p>
        </div>
      </div>
    </Notification>

    <Notification>
      <div className="icon-message">
        <MdWarning className="warning-logo" />
        <div>
          <h1 className="warning-heading">Warning</h1>
          <p>Viewers of this file can see comments and suggestions</p>
        </div>
      </div>
    </Notification>

    <Notification>
      <div className="icon-message">
        <MdInfo className="info-logo" />
        <div>
          <h1 className="info-heading">Info</h1>
          <p>Anyone on the internet can view these files</p>
        </div>
      </div>
    </Notification>
  </div>
)
export default AlertNotification
