import React from 'react'

const Card = (props) => {
    
    return (
        <div>
            <a href={props.elem.url} target='_blank'>
                <div className='h-10 w-10 sm:h-32 sm:w-36 md:h-36 md:w-40 overflow-hidden rounded-xl'>
                    <img className='h-32 w-36 object-cover' src={props.elem.download_url} alt="" />
                </div>
                <h2 className='font-bold text-lg'>{props.elem.author}</h2>
            </a >
        </div>
    )
}

export default Card