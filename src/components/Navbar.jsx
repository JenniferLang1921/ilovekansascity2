import React, {useState} from 'react';

import {MenuIcon, XIcon} from '@heroicons/react/outline';
import logo from '../assets/Kansas_City_Love.png'

const Navbar = () => {
    const [nav, setNav] = useState (false)
    const handleClick = () => setNav(!nav)


  return (
    <div className='w-screen h-[80px] z-10 bg-white fixed drop-shadow-lg'>
       <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
            <img src={logo} alt="Kansas City Love" />
               
            <ul className='hidden md:flex pl-8'>
                <li>About</li>
                <li>Things To Do In KC</li>
                <li>Restaurants</li>
                <li>KC Events</li>
            </ul>
            </div>
            <div className='hidden md:flex pr-4'>
                <button className='border-none bg-transparent text-black mr-4'>Sign In</button>
                <button className='px-8 py-3'>Sign Up</button>
            </div>
       <div className='md:hidden' onClick={handleClick}>
           {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
       
       </div>
       </div>
       <ul className={!nav ? 'hidden' : 'absolute bg-white w-full px-8'}>
                <li className='border-b-2 border-zinc-100 w-full'>About</li>
                <li className='border-b-2 border-zinc-100 w-full'>Things To Do In KC</li>
                <li className='border-b-2 border-zinc-100 w-full'>Restaurants</li>
                <li className='border-b-2 border-zinc-100 w-full'>KC Events</li>
<div className='flex flex-col my-4'>
<button className='bg-transparent text-black px-8 py-3 mb-4'>Sign In</button>
                <button className='px-8 py-3'>Sign Up</button>
</div>
       </ul>
        


    </div>
  )
}

export default Navbar