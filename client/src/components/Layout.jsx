import React from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();

  // Define an array of route paths where you want to hide the header and footer
  const routesToHideHeaderFooter = ['login', 'register', 'eventrequest', 'dashboard'];

  const locationArray = location.pathname.split('/').filter(Boolean);

  // Check if the current route is in the array of routes to hide header and footer
  const shouldHideHeaderFooter = routesToHideHeaderFooter.some(route => locationArray.includes(route));

  return (
    <>
      {!shouldHideHeaderFooter && <Header />}
      <main>
        <Outlet />
      </main>
      {!shouldHideHeaderFooter && <Footer />}
    </>
  );
};

export default Layout;