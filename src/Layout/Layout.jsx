import React from 'react'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

const Layout = () => {

  const { totalCount } = useSelector(state => state.cart)
  console.log("Valor de temp: ", totalCount)

  return (
    <>
      <div className='container'>
        <Navbar/>
          <p>Productos en el carrito: {totalCount}</p>
            <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default Layout