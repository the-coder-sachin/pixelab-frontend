import React from 'react'
import { logo } from '../assets/assets'
import Button from './Button/Button'

const Navbar = () => {
  return (
    <>
    <nav>
        <div className="flex items-center justify-between p-5 pr-12">
            <div className="logo cursor-pointer">
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
            <Button>Sign up</Button>
        </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar