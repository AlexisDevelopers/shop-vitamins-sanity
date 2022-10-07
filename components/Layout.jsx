import React from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';
import Newsletter from './Newsletter';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>LaVelle Vitamin Shop</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">
        {children}
      </main>
      <section className="main-container">
        <Newsletter />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout