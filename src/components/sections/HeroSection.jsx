import React from 'react'
import { heroBg } from '../../assets/assets'

const HeroSection = () => {
  return (
    <>
      <section className="flex w-full px-12 h-[100vh] bg-slate-50">
        <div className="left flex flex-1 justify-end">
          <div className="container w-[60%] flex flex-col gap-5 justify-start items-start mt-8">
            <h1 className="text-5xl font-bold poppins-regular tracking-wide leading-tight">
              We boost growth for your statup business
            </h1>
            <p className='text-xs text-neutral-600'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
              quas possimus minus dignissimos
            </p>
            <button className="py-2 px-4 text-white rounded-md bg-orange-500 hover:bg-orange-600">
              Get Started
            </button>
          </div>
        </div>
        <div className="right flex-1 relative">
          <img src={heroBg} alt="hero" className="h-[460px] object-cover absolute top-0 left-[-250px]" />
        </div>
      </section>
    </>
  );
}

export default HeroSection