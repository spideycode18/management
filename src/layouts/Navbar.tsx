import { FunctionComponent } from 'react'
import { Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import face1 from '../assets/images/faces/face1.jpg'
import face3 from '../assets/images/faces/face3.jpg'
import face4 from '../assets/images/faces/face4.jpg'
import logo from '../assets/images/logo.svg'
import miniLogo from '../assets/images/logo-mini.svg'


const Navbar: FunctionComponent = () => {
  const toggleOffcanvas = () => {
    document.querySelector('.sidebar-offcanvas')?.classList.toggle('active');
  }
  return (
    <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        <Link className="navbar-brand brand-logo" to="/"><img src={logo} alt="logo" /></Link>
        <Link className="navbar-brand brand-logo-mini" to="/"><img src={miniLogo} alt="logo" /></Link>
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-stretch">
        <button className="navbar-toggler navbar-toggler align-self-center" type="button" onClick={ () => document.body.classList.toggle('sidebar-icon-only') }>
          <span className="mdi mdi-menu"></span>
        </button>
        <ul className="navbar-nav navbar-nav-right">
          <li className="nav-item nav-profile">
            <Dropdown>
              <Dropdown.Toggle className="nav-link">
                <div className="nav-profile-img">
                  <img src={face1} alt="user"/>
                  <span className="availability-status online"></span>
                </div>
                <div className="nav-profile-text">
                  <p className="mb-1 text-black">David Greymaax</p>
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu className="navbar-dropdown">
                <Dropdown.Item href="!#" onClick={evt =>evt.preventDefault()}>
                  <i className="mdi mdi-cached me-2 text-success"></i>
                  Activity Log
                </Dropdown.Item>
                <Dropdown.Item href="!#" onClick={evt =>evt.preventDefault()}>
                  <i className="mdi mdi-logout me-2 text-primary"></i>
                  Signout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li className="nav-item">
            <Dropdown>
              <Dropdown.Toggle className="nav-link count-indicator">
                <i className="mdi mdi-email-outline"></i>
                <span className="count-symbol bg-warning"></span>
              </Dropdown.Toggle>

              <Dropdown.Menu className="preview-list navbar-dropdown" align={"end"}>
                <h6 className="p-3 mb-0">Messages</h6>
                <div className="dropdown-divider"></div>
                <Dropdown.Item className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                  <div className="preview-thumbnail">
                    <img src={face4} alt="user" className="profile-pic"/>
                  </div>
                  <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Mark send you a message</h6>
                    <p className="text-gray mb-0">
                      1 Minutes ago
                    </p>
                  </div>
                </Dropdown.Item>
                <div className="dropdown-divider"></div>
                <Dropdown.Item className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                  <div className="preview-thumbnail">
                    <img src={face1} alt="user" className="profile-pic"/>
                  </div>
                  <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Cregh send you a message</h6>
                    <p className="text-gray mb-0">
                      15 Minutes ago
                    </p>
                  </div>
                </Dropdown.Item>
                <div className="dropdown-divider"></div>
                <Dropdown.Item className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                  <div className="preview-thumbnail">
                    <img src={face3} alt="user" className="profile-pic"/>
                  </div>
                  <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Profile picture updated</h6>
                    <p className="text-gray mb-0">
                      18 Minutes ago
                    </p>
                  </div>
                </Dropdown.Item>
                <div className="dropdown-divider"></div>
                <h6 className="p-3 mb-0 text-center cursor-pointer">4 new messages</h6>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li className="nav-item">
            <Dropdown>
              <Dropdown.Toggle className="nav-link count-indicator">
                <i className="mdi mdi-bell-outline"></i>
                <span className="count-symbol bg-danger"></span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu navbar-dropdown preview-list">
                <h6 className="p-3 mb-0">Notifications</h6>
                <div className="dropdown-divider"></div>
                <Dropdown.Item className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-success">
                      <i className="mdi mdi-calendar"></i>
                    </div>
                  </div>
                  <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 className="preview-subject font-weight-normal mb-1">Event today</h6>
                    <p className="text-gray ellipsis mb-0">
                    Just a reminder that you have an event today
                    </p>
                  </div>
                </Dropdown.Item>
                <div className="dropdown-divider"></div>
                <Dropdown.Item className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-warning">
                      <i className="mdi mdi-settings"></i>
                    </div>
                  </div>
                  <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 className="preview-subject font-weight-normal mb-1">Settings</h6>
                    <p className="text-gray ellipsis mb-0">
                    Update dashboard
                    </p>
                  </div>
                </Dropdown.Item>
                <div className="dropdown-divider"></div>
                <Dropdown.Item className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-info">
                      <i className="mdi mdi-link-variant"></i>
                    </div>
                  </div>
                  <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 className="preview-subject font-weight-normal mb-1">Launch Admin</h6>
                    <p className="text-gray ellipsis mb-0">
                    New admin wow!
                    </p>
                  </div>
                </Dropdown.Item>
                <div className="dropdown-divider"></div>
                <h6 className="p-3 mb-0 text-center cursor-pointer">See all notifications</h6>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
        <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" onClick={toggleOffcanvas}>
          <span className="mdi mdi-menu"></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
