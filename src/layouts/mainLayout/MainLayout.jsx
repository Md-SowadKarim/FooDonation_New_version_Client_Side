import React from 'react'
import Navbar from '../../components/nav/Navbar'
import Footer from '../../components/footer/Footer'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

const MainLayout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
      <Toaster />
    </div>
  )
}

export default MainLayout
