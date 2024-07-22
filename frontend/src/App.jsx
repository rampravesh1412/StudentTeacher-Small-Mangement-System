import React from 'react'
import Signup from './component/Signup/Signup'
import Signin from './component/Signin/Signin'
import Header from './component/Header/Header'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default App
