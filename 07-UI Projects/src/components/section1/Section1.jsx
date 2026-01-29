import React from 'react'
import Navber from './Navber'
import Page1Context from './Page1Context'

const Section1 = (props) => {
  return (
    <div className='h-screen w-full bg-amber-200'>
        <Navber/>
        <Page1Context users={props.users}/>
    </div>
  )
}

export default Section1
