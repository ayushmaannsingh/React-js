import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Github from './components/Github/Github'
import About from './components/About/About'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet />
    <Footer />
    

    </>
  )
}

export default Layout