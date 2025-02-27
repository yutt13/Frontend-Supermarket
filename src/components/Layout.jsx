import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer';

const Layout = ({children}) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar/>
      <div className='mt-5 mx-20 p-4 flex-grow'>
        {children}
      </div>
      <Footer/>
    </div>
  )
}

export default Layout