import React from 'react'
import MainContainer from './MainContainer'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
      <div className='grid grid-flow-col'>
          <Sidebar />
      {/* <MainContainer />
      <WatchPage /> */}
      <Outlet />
         
      </div>
  )
}

export default Body