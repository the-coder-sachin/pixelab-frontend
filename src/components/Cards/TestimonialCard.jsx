import React from 'react'

const TestimonialCard = ({picture, name, feedback}) => {

    const lorem =
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, tenetur voluptatum..";


  return (
    <div>
        <div className="card w-[380px] h-[170px] flex">
         <div className="img h-full w-[30%] flex justify-end">
            <img src={picture} alt="profile" className='size-16 rounded-full mr-4 transition-all duration-300 hover:scale-105 cursor-pointer' />
         </div>
         <div className="content h-full w-[70%]">
            <p className='text-xs font-[500] tracking-wide'>{feedback || lorem}</p>
            <p className='text-neutral-400 font-semibold uppercase mt-5'>{name}</p>
         </div>
        </div>
    </div>
  )
}

export default TestimonialCard