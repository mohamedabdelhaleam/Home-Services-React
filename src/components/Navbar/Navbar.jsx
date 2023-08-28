import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const [isMenu ,setIsMenu] = useState(true)
  const toggleMenu = (e)=>{
    e.preventDefault()
    setIsMenu(!isMenu)
  }
  return (
    <div className='bg-[#CE4642] font-bold text-lg xs:text-sm transition-all duration-150 ease-in-out'>
        <div className="m-auto max-w-[1280px] flex flex-row-reverse justify-between items-center py-4 md:mx-8 lg:mx-8 sm:mx-8 xl:mx-8">
            <div><NavLink to='/' className='px-3 h-8'><img src={process.env.REACT_APP_LOGO} className='h-8' alt="" /></NavLink></div>
            <div className='flex justify-around items-center flex-row-reverse'>
              <ul className='flex flex-row-reverse justify-between items-center text-white gap-2 xs:hidden sm:hidden'>
                  <li className=' px-3'><NavLink to='/' className='py-2 hover:border-b-white hover:border-b-2'>الرئيسية</NavLink></li>
                  <li className=' px-3'><NavLink to='/about-us' className='py-2 hover:border-b-white hover:border-b-2'>من نحن</NavLink></li>
                  <li className=' px-3'><NavLink to='/services' className='py-2 hover:border-b-white hover:border-b-2'>خدماتنا</NavLink></li>
                  <li className=' px-3'><NavLink to='/buy-service' className='py-2 hover:border-b-white hover:border-b-2'>طلب خدمة</NavLink></li>
                  <li className=' px-3'><NavLink to='/rate-services' className='py-2 hover:border-b-white hover:border-b-2'>تقيم خدمة</NavLink></li>
              </ul>
              <div><HiMenu size={50} color='white' className='hidden xs:flex sm:flex cursor-pointer ' onClick={toggleMenu}/></div>
            </div>
        </div>
        <div>
        <ul className={isMenu ? 'hidden':'flex  justify-between items-center flex-col text-white'}>
                  <li className=' px-3 border-b-2 py-3 w-full text-center '><NavLink to='/' className='py-2 hover:border-b-white hover:border-b-2'>الرئيسية</NavLink></li>
                  <li className=' px-3 border-b-2 py-3 w-full text-center '><NavLink to='/services' className='py-2 hover:border-b-white hover:border-b-2'>خدماتنا</NavLink></li>
                  <li className=' px-3 border-b-2 py-3 w-full text-center '><NavLink to='/buy-service' className='py-2 hover:border-b-white hover:border-b-2'>طلب خدمة</NavLink></li>
                  <li className=' px-3 border-b-2 py-3 w-full text-center '><NavLink to='/rate-services' className='py-2 hover:border-b-white hover:border-b-2'>تقيم خدمة</NavLink></li>
              </ul>
        </div>
      
    </div>
  );
}

export default Navbar;
