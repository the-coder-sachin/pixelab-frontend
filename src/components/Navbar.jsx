import React from 'react'
import { logo } from '../assets/assets'

const Navbar = () => {
  return (
    <>
    <nav>
        <div className="flex items-center justify-between p-5 pr-12">
            <div className="logo">
                <img src={logo} alt="logo"
                className='h-[56px]'
                />
            </div>
        <ul className="flex gap-6">
            <li className='font-semibold hover:text-orange-500 text-neutral-700 cursor-pointer'>Home</li>
            <li className='font-semibold hover:text-orange-500 text-neutral-700 cursor-pointer'>About Us</li>
            <li className='font-semibold hover:text-orange-500 text-neutral-700 cursor-pointer'>Our App</li>
            <li className='font-semibold hover:text-orange-500 text-neutral-700 cursor-pointer'>Contacts</li>
        </ul>
        <div className="login-signup flex gap-4">
            <button className='font-semibold text-neutral-700 hover:text-orange-500'>Log in</button>
            <button className='py-2 px-4 text-white rounded-md bg-orange-500 hover:bg-orange-600'>Sign up</button>
        </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar