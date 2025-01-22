import React from 'react'
import TeamCard from '../Cards/TeamCard';

const TeamSection = () => {
  return (
    <section className="h-[100vh] flex flex-col bg-slate-50 pt-10">
      <div className="title flex justify-center flex-col items-center">
        <h2 className="text-neutral-400 uppercase tracking-widest">
          testimonials
        </h2>
        <p className="capitalize text-4xl font-semibold">
          what clients say about us
        </p>
      </div>
      <div className="wrapper flex justify-center gap-4 pt-12">
        <TeamCard/>
        <TeamCard/>
        <TeamCard/>
      </div>
    </section>
  );
}

export default TeamSection