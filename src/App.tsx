import { useState } from 'react'
import './App.scss'
import Navbar from './layouts/Navbar'
import Sidebar from './layouts/Sidebar'
import Footer from './layouts/Footer'

function App() {
  const [isFullPageLayout, setFullPageLayout] = useState(false);

  return (
    <div className="container-scroller">
      { isFullPageLayout || <Navbar /> }
      <div className="container-fluid page-body-wrapper">
      { isFullPageLayout || <Sidebar /> }
        <div className="main-panel">
          <div className="content-wrapper">
            Hello world
          </div>
          { isFullPageLayout || <Footer /> }
        </div>
      </div>
      </div>
  )
}

export default App
