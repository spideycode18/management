import { FunctionComponent, useContext, useEffect, useState } from 'react';
import face1 from '../assets/images/faces/face1.jpg'
import { Collapse } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { omit, toArray, xor } from "lodash"
import { MENU } from '../constants/Menu';
import { AuthContext } from '../contexts/AuthProvider';
import { canAccess } from '../helpers/Common';
import { DETAIL_ACTION } from '../constants/Common';

const MENU_ARRAY = toArray(MENU);

const Sidebar: FunctionComponent = () => {
  const auth = useContext(AuthContext);
  const [dataSource, setDataSource] = useState<any>([]);
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

  const renderMenu = (arrayData: any[]) => {
    return arrayData.filter((item: any) => (item.resource && auth.user && canAccess({
      permissions: auth.user,
      action: DETAIL_ACTION.VIEW,
      resource: item.resource
    })) || !item.resource).map((item: any) => {
      var result = toArray(omit(item, ['title', "path", "isDisabled", "icon", 'resource']) || {}) || [];

      const model: any = {
        label: item.isDisabled ? item.title : <Link className={ isPathActive(item.path) ? 'nav-link active' : 'nav-link' } to={item.path}>{item.title}</Link>,
        key: item.path,
        children: !!result?.length ? renderMenu(result) : undefined,
        icon: item.icon
      }

      return model;
    })
  }

  useEffect(() => {
    setDataSource(renderMenu(MENU_ARRAY));
    console.log(renderMenu(MENU_ARRAY))
  }, [auth.user]);
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
              <span className="font-weight-bold mb-2 text-truncate" title={ auth && auth.user}>{ auth && auth.user}</span>
              <span className="text-secondary text-small">Project Manager</span>
            </div>
            <i className="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
          </a>
        </li>
        {
          dataSource.map((menu: any) => {
            if(menu.children) {
              return <li key={menu.key} className={ isPathActive(menu.key) ? 'nav-item active' : 'nav-item' }>
              <div className={ expanded.includes(menu.key) ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => toggleMenu(menu.key) } data-toggle="collapse">
                <span className="menu-title">{menu.label}</span>
                <i className="menu-arrow"></i>
                <i className={menu.icon + ' menu-icon'}></i>
              </div>
              <Collapse in={expanded.includes(menu.key)}>
                <ul className="nav flex-column sub-menu">
                  {menu.children.map((child: any) => <li key={`child-${child.key}`} className="nav-item"> {child.label}</li>)}
                </ul>
              </Collapse>
            </li>    
            } else {
              return <li key={menu.key} className={ isPathActive(menu.key) ? 'nav-item active' : 'nav-item' }>
              <Link className="nav-link" to={menu.key}>
                <span className="menu-title">{menu.label}</span>
                <i className={menu.icon + ' menu-icon'}></i>
              </Link>
            </li>
            }
          })
        }
      </ul>
    </nav>
  )
}

export default Sidebar
