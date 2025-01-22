import React from 'react'
import { logo } from '../../assets/assets'

const Footer = () => {
  return (
    <footer>
      <div className="flex px-16 py-4 justify-between items-center text-purple-950 font-[500]">
        <img src={logo} alt="logo" className="cursor-pointer h-14" />
        <p className="copyright">
          © 1996-2025, pixelab.com, all rights reserved.
        </p>
        <ul className="link flex justify-between gap-5 ml-16">
            <li className='cursor-pointer hover:text-orange-400'>Portfolio</li>
            <li className='cursor-pointer hover:text-orange-400'>How it works</li>
            <li className='cursor-pointer hover:text-orange-400'>pricing</li>
            <li className='cursor-pointer hover:text-orange-400'>about</li>
            <li className='cursor-pointer hover:text-orange-400'>login</li>
        </ul>
      </div>
      <hr />
      <p className='p-9 text-sm text-slate-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic repudiandae saepe fuga?</p>
    </footer>
  );
}

export default Footer