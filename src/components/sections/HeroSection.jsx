import React from 'react'
import { heroBg } from '../../assets/assets'
import Button from '../Button/Button';

const HeroSection = () => {
  return (
    <>
      <section className="flex w-full md:px-12 h-[80vh] bg-slate-50">
        <div className="left flex flex-1 justify-end">
          <div className="container lg:w-[60%] flex flex-col gap-5 justify-start items-start mt-8 p-9 md:p-0">
            <h1 className="md:text-5xl text-4xl font-bold poppins-regular tracking-wide leading-tight">
              We boost growth for your statup business
            </h1>
            <p className='text-xs text-neutral-600'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
              quas possimus minus dignissimos
            </p>
            <Button>
              Get Started
            </Button>
          </div>
        </div>
        <div className="right sm:flex-1 relative">
          <img src={heroBg} alt="hero" className="h-[460px] object-cover absolute top-0 left-[-50px] hover:scale-105 transition-all duration-500 cursor-pointer hidden sm:block" />
        </div>
      </section>
    </>
  );
}

export default HeroSection