import React, { useEffect, useState } from 'react';
import './services.css'
import ServicesCard from '../components/ServicesCard/ServicesCard';
import { baseUrl } from '../api/Api';
import axios from 'axios';
import Loader from '../Loader/Loader'
import { Helmet } from 'react-helmet';

const Services =  () => {
  const [services ,setServices] =useState([])
  const [isLoading ,setIsLoading] =useState(true)

  useEffect(()=>{

    axios.get(`${baseUrl}/services`).then(response=>{
        setServices(response.data.services);
        setIsLoading(false)
    }).catch(error =>{
      console.log(error);
      setIsLoading(true)
    })
},[])

  return (
    <div>
      <Helmet>
        <title>

      خدماتنا | مركز الدكتور احمد أحمد
        </title>
      </Helmet>
      {
        isLoading ?(<Loader />) :(
            <div>
            <header className='py-48 bg-[#F7F7F7] services-bg'>
              <div className='m-auto max-w-[1280px] flex justify-center items-center xs:px-4'>
                <div className='text-center'>
                  <div className='text-xl'>مركز دكتور أحمد أحمد » خدماتنا</div>
                  <div className='text-4xl xs:2xl font-semibold'>خدمات مركز دكتور أحمد أحمد</div>
                </div>
              </div>
            </header>
            <div className='py-16 mx-4'>
              <div className='m-auto max-w-[1280px] grid grid-cols-4 gap-4 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
                {
                  services.map((service)=>(
                    <ServicesCard slug = {service.slug} name={service.name} des ={service.short_description} img = {service.image}/>
                  ))
                }
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default Services;
