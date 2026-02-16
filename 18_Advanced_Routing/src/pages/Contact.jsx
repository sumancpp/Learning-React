import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='flex items-center justify-center gap-5'>
      <Link className='text-lg font-bold' to='/contact/call'>Call</Link>
      <Link className='text-lg font-bold' to='/contact/email'>Email</Link>
      <Outlet/>
    </div>
  )
}

export default Contact
