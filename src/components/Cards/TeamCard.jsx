import React from 'react'
import { dp, facebook, instagram, twitter } from '../../assets/assets'

const TeamCard = ({name, designation, profile}) => {
  return (
    <div className='w-[320px] border'>
        <div className="card border flex flex-col justify-center items-center p-8 gap-4 w-full">
            <img src={profile || dp} alt="profile" className='size-20 rounded-lg' />
            <p className="name text-purple-950 font-bold">{name || 'Vannesa Laird'}</p>
            <p className="designation text-neutral-400">{designation || 'UI DESIGNER'}</p>
        </div>
        <div className="social flex w-full">
            <div className="icon w-full border flex justify-center items-center p-2">
            <img src={instagram} alt="instagram" className='cursor-pointer size-8' />
            </div>
            <div className="icon w-full border flex justify-center items-center p-2">
            <img src={facebook} alt="facebook"   className='cursor-pointer size-8'/>
            </div>
            <div className="icon w-full border flex justify-center items-center p-2">
            <img src={twitter} alt="twitter"     className='cursor-pointer size-8'/>
            </div>
        </div>
    </div>
  )
}

export default TeamCard