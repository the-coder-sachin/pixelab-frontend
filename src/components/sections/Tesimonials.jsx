import React from 'react'
import TestimonialCard from '../Cards/TestimonialCard';
import { dp } from '../../assets/assets';

const Tesimonials = () => {
  return (
    <section className="h-[100vh] flex flex-col bg-slate-50 pt-10">
      <div className="title flex justify-center flex-col items-center">
        <h2 className="text-neutral-400 uppercase tracking-widest">testimonials</h2>
        <p className="capitalize text-4xl font-semibold">
          what clients say about us
        </p>
      </div>
      <div className="block h-full px-20">
        <div className="wrapper h-full w-full  flex flex-wrap justify-center items-center px-20 gap-5 pt-16">
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