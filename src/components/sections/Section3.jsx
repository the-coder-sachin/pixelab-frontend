import React from 'react'
import { sec3 } from '../../assets/assets'

const Section3 = () => {
  return (
    <section className='flex xl:h-[80vh] w-full xl:p-20 sm:p-16 py-10 flex-col-reverse justify-center items-center lg:flex-row'>
        <div className="left lg:w-[35%] flex flex-col p-6 justify-center lg:items-start items-center">
            <h3 className='text-purple-900 text-3xl font-semibold text-center lg:text-start'>Many Blocks and components</h3>
            <p className='text-neutral-400 mt-6 text-center text-sm md:text-base lg:text-start'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore repudiandae, impedit earum illo eius ipsum!</p>
            <button className='text-purple-800 font-semibold px-6 py-2 rounded-full border-2 border-gray-200 mt-14 lg:mt-24 hover:bg-purple-700 hover:text-white transition-all duration-300 '>Explore</button>
        </div>
        <div className="right lg:w-[65%] flex justify-end items-center">
            <img src={sec3} alt="image" className='w-[300px] md:h-[350px] md:w-fit object-center rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer'/>
        </div>
    </section>
  )
}

export default Section3