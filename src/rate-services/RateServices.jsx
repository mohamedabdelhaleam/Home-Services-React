import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import centerImg from '../assets/images/center.png'
import axios from 'axios';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {baseUrl} from '../api/Api'
import { Helmet } from 'react-helmet';
const RateServices =  () => {
    const [name ,setName] =useState("")
    const [services ,setServices] =useState([])
    const [title ,setTitle] =useState("")
    const [rate ,setRate] =useState("")
    const [email ,setEmail] =useState("")
    const [detail ,setDetail] =useState("")
    const [id ,setId] =useState("")


    useEffect(()=>{
        
        axios.get(`${baseUrl}/services`).then(response =>{
            setServices(response.data.services)
        })        
 },[])

    const handleData =  (e)=>{
        e.preventDefault()
         axios.post(`${baseUrl}/make_rate`,{
            
                'rate' : rate, 
                'title' : title,
                'content' : detail,
                'name' : name,
                'email' : email,
                'service_id' : id,
                
        }).then(response =>{
            if (response.data.code === 200) {
                toast.success(response.data.msg, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
            }
            else {
                toast.error(response.data.msg, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
            }
        })
    }
  return (
    <div>
        <Helmet>
            <title>
                تقيم خدمة | مركز الدكتور أحمد أحمد
            </title>
        </Helmet>
        <Header />
        <div className='py-16 '>
      <div className='m-auto max-w-[1280px] flex justify-evenly items-center flex-row-reverse  xs:justify-center'>
        <img src={centerImg}
            width={600}
            height={400}
            className='xs:hidden sm:hidden md:hidden lg:hidden'
        alt="" srcset="" />
        <div className='rounded-md border-t-8 border-b-8 shadow-lg border-[#CE4642]'>
            <form action="" className='py-8 px-5 bg-[#F7F7F7] text-[#CE4642] xs:w-[320px] w-[450px] text-center'>
                <div className='text-md'>نحن نرعاكم على مدار 24 ساعة</div>
                <div className='text-2xl'>تقيم الخدمات </div>
                <br />
                <label htmlFor="" className='text-lg '>التقيم</label>
                <Box
                    sx={{
                        '& > legend': { mt: 2 },
                    }}
                    >
                    <Rating
                        name="simple-controlled"
                        value={rate}
                        precision={1}
                        size ="large"
                        onChange={(event, newValue) => {
                        setRate(newValue);
                        }}
                    />
                </Box>
                
                <br />
                <label htmlFor="" className='text-lg'>أسمك</label>
                <br />
                <input type="text"  className='w-full h-8 border-[#CE4642] border-2 text-right' onChange={(e)=>{setName(e.target.value)}}/>
                 <br /><br />   
                <label htmlFor="" className='text-lg'>البريد الإلكتروني</label>
                <br />
                <input type="email"  className='w-full h-8 border-[#CE4642] border-2 text-right' onChange={(e)=>{setEmail(e.target.value)}}/>
                 <br /><br />   
                <label htmlFor="" className='text-lg'>عنوان التقيم </label>
                <br />
                <input type="email"  className='w-full h-8 border-[#CE4642] border-2 text-right' onChange={(e)=>{setTitle(e.target.value)}}/>
                 <br /><br />   
                 <label htmlFor="" className='text-lg'>الخدمة المتعلقة</label>
                 <select name="" id="" className='w-full h-8 border-[#CE4642] border-2 text-center'  onChange={(e)=>{setId(e.target.value)}}>
                    {
                        services.map((service)=>(
                            <option key={service.id} value={service.id} className='text-center'>{service.name}</option>
                        ))
                    }
                 </select>
                 <br /><br />
                 <label htmlFor="" className='text-lg' >رأيك في الخدمة</label>
                 <textarea name="" id="" cols="30" rows="10" className='w-full border-[#CE4642] border-2 text-right'  onChange={(e)=>{setDetail(e.target.value)}}></textarea>
                 <br />
                 <button className='bg-[#CE4642] text-white py-2 px-6 text-xl text-center font-semibold rounded-md cursor-pointer' onClick={handleData}>إرســـال</button>
            </form>
        </div>
      </div>
    </div>
    <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
    />
    </div>
  );
}

export default RateServices;
