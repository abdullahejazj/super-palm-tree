import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
    <Header />
    <main className='mr-60 ml-60'>{children}</main>
    <Footer />
  </>
  )
}

export default Layout