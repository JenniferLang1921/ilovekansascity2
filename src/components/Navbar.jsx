import React, {useState} from 'react';
import {MenuIcon, XIcon} from '@heroicons/react/outline';
import logo from '../assets/Kansas_City_Love.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [nav, setNav] = useState (false)
    const handleClick = () => setNav(!nav)
   // const handleClose = () => setNav(!nav)


  return (
    <nav className='w-screen h-[80px] z-10 bg-white fixed drop-shadow-lg'>
       <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
            <Link to="/"> <img src={logo} alt="Kansas City Love" /></Link>
               
            </div>
            <div className='hidden md:flex pr-4'>
            <ul className='hidden md:flex pl-8'>
              <li className='link link-underline link-underline-black'><Link to="/about">About</Link></li>
              <li className='link link-underline link-underline-black'><Link to="/thingstodoinkc">Things To Do In KC</Link></li>
              <li className='link link-underline link-underline-black'><Link to="/restaurants">Restaurants</Link></li>
              <li className='link link-underline link-underline-black'><Link to="/events">KC Events This Weekend</Link></li>
            </ul>
            </div>
       <div className='md:hidden' onClick={handleClick}>
           {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
       
       </div>
       </div>
       <ul className={!nav ? 'hidden' : 'absolute bg-white w-full px-8'}>
              <li className='border-b-2 border-zinc-100 w-full link link-underline link-underline-black'><Link to="/about">About</Link></li>
              <li className='border-b-2 border-zinc-100 w-full link link-underline link-underline-black'><Link to="/thingstodoinkc">Things To Do In KC</Link></li>
              <li className='border-b-2 border-zinc-100 w-full link link-underline link-underline-black'><Link to="/restaurants">Restaurants</Link></li>
              <li className='border-b-2 border-zinc-100 w-full link link-underline link-underline-black'><Link to="/events">KC Events This Weekend</Link></li>
          
       </ul>
        


    </nav>
  )  
 
  }
export default Navbar