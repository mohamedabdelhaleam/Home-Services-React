
import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({slug,name,des,img}) => {

  return (
    <div className='shadow-md overflow-hidden rounded-lg bg-white pb-12 flex flex-col justify-between items-center'>
      <img src={img} alt="" srcset="" width={900} height={600}/>
      <div className='text-[#CE4642] text-3xl px-8 mt-6 text-center'><Link to={`/services/${slug}`}>{name}</Link></div>
      <div className='my-4 px-4 text-center'>{des}</div>
      <div><Link to={`/services/${slug}`} className='bg-[#CE4642] text-white py-2 px-6 text-xl font-semibold rounded-md'> طلب أو أستفسار عن الخدمة</Link></div>
    </div>
  );
}

export default ServicesCard;
