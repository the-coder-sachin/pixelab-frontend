import React from 'react'
import { mailBg } from '../../assets/assets';

const SubscribeSection = () => {
  return (
    <section className="xl:h-[100vh] flex flex-col bg-slate-50 pt-10">
      <div className="title flex justify-center flex-col items-center mb-8">
        <h2 className="text-neutral-400 uppercase tracking-widest">
          our team
        </h2>
        <p className="capitalize md:text-4xl sm:text-2xl font-semibold text-xl">
          subscribe our newsletter
        </p>
      </div>
      <div className="wrapper flex xl:px-20 flex-col justify-center items-center lg:flex-row">
        <img src={mailBg} alt="image" className='h-[400px]' />
        <div className="content w-full pt-10 px-5 sm:p-10 md:p-16 flex flex-col gap-7">
            <p className='text-xs sm:text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint inventore tempora laborum, animi molestias consequatur. Optio animi, explicabo deserunt, porro tempora doloremque culpa delectus dolores, aperiam saepe provident sed pariatur?</p>
            <input type="email" placeholder='Your E-mail here....'
            className='w-full shadow-2xl py-4 pl-5 rounded-lg outline-none'
            />
            <button className='bg-orange-500 text-white capitalize w-full py-3 rounded-lg hover:bg-orange-600'>subscribe our newsletter</button>
        </div>
      </div>
    </section>
  );
}

export default SubscribeSection