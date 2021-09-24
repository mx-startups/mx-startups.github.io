import React from 'react';
import GlobalStyle from './GlobalStyle';
import Header from './Header';

const Layout = ({ children }) => {
  return(
    <>
      <GlobalStyle />

      <Header />

      {children}
    </>
  );
};

export default Layout;