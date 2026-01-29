import React, { useRef } from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
   const scrollRef = useRef(null)

  const handleWheel = (e) => {
    e.preventDefault()
    scrollRef.current.scrollLeft += e.deltaY
  }
  return (
    
    <div ref={scrollRef} id="right" onWheel={handleWheel} className='h-full w-[120vh] p-4 flex flex-nowrap gap-10 overflow-x-auto scroll-smooth'>
    {props.users.map(function(elem,idx){

        return <RightCard key={idx} id={idx} color={elem.color} img={elem.img} tag={elem.tag}/>

      })}

    </div>
    
  )
}

export default RightContent
