import React from 'react'
import { logo } from '../../assets/assets'

const Footer = () => {
  return (
    <footer>
      <div className="flex px-16 py-4 justify-between items-center text-purple-950 font-[500] flex-col xl:flex-row">
        <img
          src={logo}
          alt="logo"
          className="cursor-pointer h-14 hidden sm:block"
        />
        <p className="copyright text-xs sm:text-sm md:text-base text-nowrap">
          © 1996-2025, pixelab.com, all rights reserved.
        </p>
        <ul className="link flex justify-between gap-5 xl:ml-16 text-nowrap flex-col items-center mt-3 xl:mt-0 text-xs sm:text-sm md:text-base sm:flex-row">
          <li className="cursor-pointer hover:text-orange-400">Portfolio</li>
          <li className="cursor-pointer hover:text-orange-400">How it works</li>
          <li className="cursor-pointer hover:text-orange-400">pricing</li>
          <li className="cursor-pointer hover:text-orange-400">about</li>
          <li className="cursor-pointer hover:text-orange-400">login</li>
        </ul>
      </div>
      <hr />
      <p className="p-9 text-sm text-slate-500 text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
        repudiandae saepe fuga?
      </p>
    </footer>
  );
}

export default Footer