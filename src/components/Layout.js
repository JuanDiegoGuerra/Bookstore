import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);
export default Layout;
