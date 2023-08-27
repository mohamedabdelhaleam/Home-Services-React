import React, { useEffect, useState } from 'react';
import { BiSolidClinic,BiSolidCommentDots } from "react-icons/bi";
import { MdOutlineContactPhone } from "react-icons/md";
import { AiFillInstagram,AiFillFacebook,AiFillTwitterSquare } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { baseUrl } from '../../api/Api';
import axios from 'axios';

const Footer = () => {
    const [servicesData ,setServicesData] =useState([])
    useEffect(()=>{
        axios.get(`${baseUrl}/services`).then(response =>{
        const data = response.data.services;
        setServicesData(data)
        }).catch(error =>{
        console.log(error);
        })
    },[])
  return (
<div className='bg-[#eb736f] text-white p-8'>
      <div className='m-auto max-w-[1280px]'>
        <div className='flex justify-between items-start flex-row-reverse text-right 
        xs:flex-col xs:text-center xs:items-center xs:gap-8
        sm:flex-col sm:text-center sm:items-center sm:gap-8
        md:flex-col md:text-center md:items-center md:gap-8
        '>
          <div className='flex flex-col gap-3 w-1/4 items-center text-right text-sm xs:w-full xs:text-center md:w-full sm:text-center sm:w-full md:text-center'>
            <div><img src={process.env.REACT_APP_LOGO} alt="" srcset="" /></div>
            <div>مركز د. أحمد أحمد هو مركز متخصص في توفير الخدمات الطبية بالمنزل منذ أكثر من 5 سنوات، وذلك من خلال فريق طبي كبير تم اختيارهم بعناية من أطباء في جميع التخصصات وتمريض ومعالجين وأخصائيين ذوي الخبرة والكفاءة.
            </div>
          </div>
          <div className='flex flex-col gap-3 '>
            <div className='text-center text-lg font-semibold border-b-2 border-white'>الخدمات</div>
            {
                servicesData.map((service)=>(
                    <div><Link to={`/services/${service.slug}`}>
                        {
                            service.name
                        }
                        </Link>
                    </div>
                ))
            }

          </div>
          <div className='flex flex-col gap-3'>
            <div className='text-center text-lg font-semibold border-b-2 border-white'>روابط هامة</div>
            <div><Link to="/">الرئيسية</Link></div>
            <div><Link to="/services">خدماتنا</Link></div>
            <div><Link to="/buy-service">طلب خدمة</Link></div>
            <div><Link to="/rate-services">تقيم خدمة</Link></div>
          </div>
          <div className='flex flex-col gap-3'>
            <div className='text-center text-lg font-semibold border-b-2 border-white'>تواصل معنا</div>
            <div>+0913-705-3875</div>
            <div>ElizabethJ@jourrapide.com</div>
            <div>4808 Skinner Hollow Road
            <br /> Days Creek, OR 97429</div>
            <div className='flex gap-2 justify-end xs:justify-center sm:justify-center md:justify-center'>
                <AiFillInstagram size={30}/>
                <AiFillTwitterSquare size={30}/>
                <AiFillFacebook size={30}/>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Footer;  