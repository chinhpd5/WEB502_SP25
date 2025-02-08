import React from 'react'
import { Outlet } from 'react-router-dom'

function AdminLayout() {
  return (
    <div className='container'>
      <Outlet/>
    </div>
  )
}

export default AdminLayout