import React from 'react'
import Button from '../Button/Button'

const Card = ({icon, title, description}) => {
  return (
    <div className='flex flex-col items-center shadow-xl p-5 gap-6 cursor-pointer rounded-2xl hover:scale-105 transition-all duration-300 bg-white'>
        <div className="icon">
            <img src={icon} alt="icon" className='size-20 object-cover' />
        </div>
        <h3 className="title text-xl font-bold capitalize hover:text-orange-500">{title}</h3>
        <p className="description text-xs w-[75%] text-neutral-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis cupiditate nisi ea, et unde nemo, inventore sit necessitatibus quo voluptatum</p>
        <Button>Learn More</Button>
    </div>
  )
}

export default Card