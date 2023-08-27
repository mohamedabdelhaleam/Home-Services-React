import React, { useEffect } from 'react';
import main from '../../assets/images/main.png'
import "./Header.css"
import { Link } from 'react-router-dom';
import Aos from 'aos';


const Header = () => {
  useEffect(()=>{
    Aos.init()
  })
  return (
    <div className='py-36 bg-[#F7F7F7] header'>
      <div className='max-w-[1280px] m-auto flex justify-between items-center flex-row-reverse gap-6 md:mx-8 lg:mx-8 sm:mx-8 xl:mx-8'>
        <div className='flex justify-around items-center flex-col md:w-full sm:w-full xs:w-full gap-6'>
            <div className='font-bold text-6xl xs:text-center xs:text-4xl sm:text-center md:text-center text-right'>خدمات <span className='text-[#CE4642]'>الرعاية الطبية المنزلية</span> <br /> رقـــم 1 فــي مصــر </div>
            <div className='font-semibold text-[#343434] text-3xl text-right xs:text-2xl xs:text-center sm:text-center md:text-center leading-10'>نقوم بتقديم مختلف الخدمات الطبية والصحية بالمنزل على <br /> مستوى جمهورية مصر العربية بأعلى كفاءة وأنسب الأسعار منذ <br /> أكثر من 5 سنوات</div>
            <Link to='/services' className='bg-[#CE4642] text-white py-3 px-8 text-xl font-semibold rounded-md'>تصفح خدماتنا</Link>
        </div>
        <div>
            <img src={main}
                width={500}
                height={500}
                data-aos="zoom-out-right"
                className='xs:hidden sm:hidden md:hidden' alt="" srcset="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
