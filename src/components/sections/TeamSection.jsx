import React from 'react'
import TeamCard from '../Cards/TeamCard';

const TeamSection = () => {
  return (
    <section className="xl:h-[100vh] flex flex-col bg-slate-50 pt-10">
      <div className="title flex justify-center flex-col items-center">
        <h2 className="text-neutral-400 uppercase tracking-widest">
          Our team
        </h2>
        <p className="capitalize text-4xl font-semibold">
          meet the team
        </p>
      </div>
      <div className="wrapper flex justify-center gap-4 md:pt-12 items-center flex-col p-5 md:flex-row">
        <TeamCard/>
        <TeamCard/>
        <TeamCard/>
      </div>
    </section>
  );
}

export default TeamSection