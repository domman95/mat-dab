import React from 'react';
import GlobalStyle from '../styles/GlobalStyles';
import Footer from './footer';
import Nav from './nav';
import SEO from './seo';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Layout({ children }) {
  return (
    <>
      <SEO />
      <GlobalStyle />
      <Nav />
      {children}
      <Footer />
    </>
  );
}
