import React from 'react'
import Card from '../Cards/Card'
import { cameraIcon, diagramIcon, imageIcon } from '../../assets/assets'

const Services = () => {
  return (
    <section className='h-[100vh] flex flex-col bg-slate-50 pt-16'>
      <div className="title flex justify-center flex-col items-center">
        <h2 className="text-neutral-400 uppercase tracking-widest">service</h2>
        <p className="capitalize text-4xl font-semibold">
          our vision & our goal
        </p>
      </div>
      <div className='flex justify-center items-center flex-1'>
        <div className="cards flex gap-7 w-[80%] h-[80%]">
          <Card icon={imageIcon} title={"graphic design"} />
          <Card icon={cameraIcon} title={"video editing"} />
          <Card icon={diagramIcon} title={"digital marketing"} />
        </div>
      </div>
    </section>
  );
}

export default Services