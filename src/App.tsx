import { useState, lazy, Suspense, useEffect } from 'react'
import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import './App.scss'
import Navbar from './layouts/Navbar'
import Sidebar from './layouts/Sidebar'
import Footer from './layouts/Footer'
import Spinner from './layouts/Spinner';
import { AuthProvider, RequireAuth } from './contexts/AuthProvider';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Categories = lazy(() => import('./pages/product-management/category/Index'));
const Products = lazy(() => import('./pages/product-management/product/Index'));
const NotFoundPage = lazy(() => import('./pages/404'));
const Icons = lazy(() => import('./pages/Icons'));
const Login = lazy(() => import('./pages/Login'));

function App() {
  const  [isFullPageLayout, setFullPageLayout] = useState(false);
  const location = useLocation();
  const onRouteChanged = () => {
    window.scrollTo(0, 0);
    const fullPageLayoutRoutes = ['/login', '/404'];
    for ( let i = 0; i < fullPageLayoutRoutes.length; i++ ) {
      if (location.pathname === fullPageLayoutRoutes[i]) {
        setFullPageLayout(true);
        document.querySelector('.page-body-wrapper')?.classList.add('full-page-wrapper');
        break;
      } else {
        setFullPageLayout(false);
        document.querySelector('.page-body-wrapper')?.classList.remove('full-page-wrapper');
      }
    }
  }

  useEffect(() => {
    onRouteChanged();
  }, [location])
  return (
    <AuthProvider>
      <div className="container-scroller">
        { isFullPageLayout || <Navbar />}
        <div className="container-fluid page-body-wrapper">
          { isFullPageLayout || <Sidebar />}
          <div className="main-panel">
            <div className="content-wrapper">
            <Suspense fallback={<Spinner />}>
              <Routes>
                <Route path="/" element={<Outlet />}>
                  <Route index element={<RequireAuth><Dashboard /></RequireAuth>} />
                  <Route path="product-management/categories" element={<RequireAuth><Categories /></RequireAuth>} />
                  <Route path="product-management/products" element={<RequireAuth><Products /></RequireAuth>} />
                  <Route path="icons" element={<RequireAuth><Icons /></RequireAuth>} />
                  <Route path="login" element={<Login />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Route>
              </Routes>
            </Suspense>
            </div>
            { isFullPageLayout || <Footer />}
          </div>
        </div>
      </div>
    </AuthProvider>
  )
}

export default App
