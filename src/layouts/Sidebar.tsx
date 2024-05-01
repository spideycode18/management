import { FunctionComponent, useState } from 'react';
import face1 from '../assets/images/faces/face1.jpg'
import { Collapse } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { xor } from "lodash"

const Sidebar: FunctionComponent = () => {
  const [expanded, setExpanded] = useState([] as string[]);
  const toggleMenu = (path: string) => {
    let curExpanded: string[] = [...expanded];
    curExpanded = xor(curExpanded, [path]) || [];
    setExpanded(curExpanded);
  }
  const location = useLocation();
  const isPathActive = (path: string) => {
    return location.pathname.startsWith(path);
  }
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
        <li className={ isPathActive('/') ? 'nav-item active' : 'nav-item' }>
          <Link className="nav-link" to="/">
            <span className="menu-title">Dashboard</span>
            <i className="mdi mdi-home menu-icon"></i>
          </Link>
        </li>
        <li className={ isPathActive('/product-management') ? 'nav-item active' : 'nav-item' }>
          <div className={ expanded.includes("/product-management") ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => toggleMenu('/product-management') } data-toggle="collapse">
            <span className="menu-title">Product management</span>
            <i className="menu-arrow"></i>
            <i className="mdi mdi-crosshairs-gps menu-icon"></i>
          </div>
          <Collapse in={expanded.includes("/product-management")}>
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"> <Link className={ isPathActive('/product-management/categories') ? 'nav-link active' : 'nav-link' } to="/product-management/categories">Categories</Link></li>
              <li className="nav-item"> <Link className={ isPathActive('/product-management/products') ? 'nav-link active' : 'nav-link' } to="/product-management/products">Product</Link></li>
            </ul>
          </Collapse>
        </li>    
        <li className={ isPathActive('/icons') ? 'nav-item active' : 'nav-item' }>
          <Link className="nav-link" to="/icons">
            <span className="menu-title">Icons</span>
            <i className="mdi mdi-contacts menu-icon"></i>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar
