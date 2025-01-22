import React from 'react'
import TestimonialCard from '../Cards/TestimonialCard';
import { dp } from '../../assets/assets';

const Tesimonials = () => {
  return (
    <section className=" flex flex-col bg-slate-50 pt-10">
      <div className="title flex justify-center flex-col items-center">
        <h2 className="text-neutral-400 uppercase tracking-widest">testimonials</h2>
        <p className="capitalize text-xl md:text-4xl font-semibold">
          what clients say about us
        </p>
      </div>
      <div className="md:h-[400px] -20 my-5 flex justify-center items-center">
        <div className="wrapper h-full w-fit flex flex-col sm:flex-wrap justify-center items-center pt-6">
            <TestimonialCard picture={dp} name={'kayley frame'} feedback={''}/>
            <TestimonialCard picture={dp} name={'kayley frame'} feedback={''}/>
            <TestimonialCard picture={dp} name={'kayley frame'} feedback={''}/>
            <TestimonialCard picture={dp} name={'kayley frame'} feedback={''}/>
        </div>
      </div>
    </section>
  );
}

export default Tesimonials