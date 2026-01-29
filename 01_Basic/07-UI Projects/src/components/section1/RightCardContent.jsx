import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-o h-full w-full p-7 flex flex-col justify-between'>
          <h2 className="bg-gray-200 text-2xl font-semibold rounded-full h-12 w-12 flex justify-center items-center">{props.id+1}</h2>
          <div className="">
         <p className="text-shadow-2xs text-xl leading-relaxed mb-10 text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga possimus voluptas laborum atque dolores animi!</p>
           <div className="flex justify-between">

            <button style={{backgroundColor:props.color}} className="text-white font-medium px-6 py-2 rounded-full cursor-pointer">{props.tag}</button>

            <button style={{backgroundColor:props.color}} className="text-white font-semibold px-3 py-2 rounded-full cursor-pointer"><i className="ri-arrow-right-up-line cursor-pointer"></i></button>
           </div>
          </div>
      </div>
  )
}

export default RightCardContent
