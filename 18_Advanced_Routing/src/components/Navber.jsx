import React from 'react'
import { Link } from 'react-router-dom'

const Navber = () => {
  return (
    <div className='flex items-center justify-between bg-blue-700 h-20 px-5 py-8'>
      <h2 className='font-bold text-4xl'>Suman</h2>
      <div className='flex items-center gap-8 font-bold text-xl'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </div>
  )
}

export default Navber
