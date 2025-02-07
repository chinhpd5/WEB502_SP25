import React from 'react'
import { Outlet } from 'react-router-dom'

function LayoutAmin() {
  return (
    <div className='container'>
      <Outlet/>
    </div>
  )
}

export default LayoutAmin