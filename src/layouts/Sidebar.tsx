import { FunctionComponent } from 'react';
import face1 from '../assets/images/faces/face1.jpg'

const Sidebar: FunctionComponent = () => {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item nav-profile">
          <a href="!#" className="nav-link" onClick={evt =>evt.preventDefault()}>
            <div className="nav-profile-image">
              <img src={face1} alt="profile" />
              <span className="login-status online"></span> {/* change to offline or busy as needed */}
            </div>
            <div className="nav-profile-text">
              <span className="font-weight-bold mb-2">David Grey. H</span>
              <span className="text-secondary text-small">Project Manager</span>
            </div>
            <i className="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
          </a>
        </li>        
      </ul>
    </nav>
  )
}

export default Sidebar
