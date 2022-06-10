import React, {useState} from 'react';
import { Link, animateScroll as scroll, } from 'react-scroll'

import {MenuIcon, XIcon} from '@heroicons/react/outline';
import logo from '../assets/Kansas_City_Love.png'

const Navbar = () => {
    const [nav, setNav] = useState (false)
    const handleClick = () => setNav(!nav)
    const handleClose = () => setNav(!nav)


  return (
    <div className='w-screen h-[80px] z-10 bg-white fixed drop-shadow-lg'>
       <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
            <img src={logo} alt="Kansas City Love" />
               
            </div>
            <div className='hidden md:flex pr-4'>
            <ul className='hidden md:flex pl-8'>
              <li className='link link-underline link-underline-black'><Link activeClass="active" to="about" smooth={true} offset={0} duration={500} >About</Link></li>
              <li className='link link-underline link-underline-black'><Link activeClass="active" to="thingstodoinkc" smooth={true} offset={-200} duration={500} >Things To Do In KC</Link></li>
              <li className='link link-underline link-underline-black'><Link activeClass="active" to="restaurants" smooth={true} offset={-100} duration={500} >Restaurants</Link></li>
              <li className='link link-underline link-underline-black'><Link activeClass="active" to="kcevents" smooth={true} offset={-100} duration={500} >KC Events This Weekend</Link></li>
            </ul>
            </div>
       <div className='md:hidden' onClick={handleClick}>
           {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
       
       </div>
       </div>
       <ul className={!nav ? 'hidden' : 'absolute bg-white w-full px-8'}>
              <li className='border-b-2 border-zinc-100 w-full link link-underline link-underline-black'><Link onClick={handleClose} activeClass="active" to="about" smooth={true} offset={0} duration={500} >About</Link></li>
              <li className='border-b-2 border-zinc-100 w-full link link-underline link-underline-black'><Link onClick={handleClose} activeClass="active" to="thingstodoinkc" smooth={true} offset={-200} duration={500} >Things To Do In KC</Link></li>
              <li className='border-b-2 border-zinc-100 w-full link link-underline link-underline-black'><Link onClick={handleClose} activeClass="active" to="restaurants" smooth={true} offset={-100} duration={500} >Restaurants</Link></li>
              <li className='border-b-2 border-zinc-100 w-full link link-underline link-underline-black'><Link onClick={handleClose} activeClass="active" to="kcevents" smooth={true} offset={-100} duration={500} >KC Events This Weekend</Link></li>
          
       </ul>
        


    </div>
  )
}

export default Navbar