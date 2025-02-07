import React from 'react'
import { Outlet } from 'react-router-dom'

function LayoutAdmin() {
  return (
    <div className='container'>
      <Outlet/>
    </div>
  )
}

export default LayoutAdmin