import React from 'react'
import { sec3 } from '../../assets/assets'

const Section3 = () => {
  return (
    <section className='flex h-[80vh] w-full p-20'>
        <div className="left w-[35%] flex flex-col p-6 justify-center items-start">
            <h3 className='text-purple-900 text-3xl font-semibold'>Many Blocks and components</h3>
            <p className='text-neutral-400 mt-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore repudiandae, impedit earum illo eius ipsum!</p>
            <button className='text-purple-800 font-semibold px-6 py-2 rounded-full border-2 border-gray-200 mt-24 hover:bg-purple-700 hover:text-white transition-all duration-300 '>Explore</button>
        </div>
        <div className="right w-[65%] flex justify-end items-center">
            <img src={sec3} alt="image" className='h-[350px] rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer'/>
        </div>
    </section>
  )
}

export default Section3