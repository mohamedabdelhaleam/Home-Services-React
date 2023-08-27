import React, { useEffect, useState } from 'react';
import StaticCard from '../StaticCard/StaticCard';
import {baseUrl} from '../../api/Api'
import axios from 'axios';
const Info = () => {

  const [services ,setServices] =useState([])

  useEffect(()=>{
    axios.get(`${baseUrl}/counter`).then(response=>{
      setServices(response.data)
    }).catch(error =>{
      console.log(error);
    })

  },[])
  
  return (
    <div className='bg-[#CE4642] py-8'>
      <div className='m-auto max-w-[1280px] '>
        <div className='w-full text-center text-2xl font-bold py-8 text-white'>خدمات الرعاية التي تمت بالفعل</div>
        <div className='grid grid-cols-4 gap-8 justify-self-center justify-items-center xs:grid-cols-1 xs:mx-8 sm:mx-8 md:mx-8 lg:mx-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 sm:justify-center'>
          {
            services.map((service)=>(
              <StaticCard number = {service.count} name ={service.name}/>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Info;
