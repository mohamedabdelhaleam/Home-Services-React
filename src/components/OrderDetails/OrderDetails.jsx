import React, {  useState } from 'react';
import callImg from '../../assets/images/call.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { baseUrl } from '../../api/Api';

const OrderDetails = ({id}) => {
    const [name ,setName] =useState("")
    const [phone ,setPhone] =useState("")
    const [detail ,setDetail] =useState("")

    const handleData =  (e)=>{
        e.preventDefault()
         axios.post(`${baseUrl}/make_order`,{
                "name": name,
                "service_id" : id,
                "details" : detail,
                "phone" : phone
                
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
    <div className='py-16 bg-[#F7F7F7]'>
      <div className='m-auto max-w-[1280px] flex justify-evenly items-center  xs:justify-center'>
      <div className='rounded-md border-t-8 border-b-8 shadow-lg border-[#CE4642]'>
            <form action="" className='py-8 px-5 bg-[#F7F7F7] text-[#CE4642] xs:w-full w-[450px] text-right'>
                <div className='text-md'>نحن نرعاكم على مدار 24 ساعة</div>
                <div className='text-2xl'>اطلب/استفسر عن خدماتنا</div>
                <br />
                <label htmlFor="" className='text-lg'>أسمك</label>
                <br />
                <input type="text"  className='w-full h-8 border-[#CE4642] border-2 text-right' onChange={(e)=>{setName(e.target.value)}}/>
                 <br /><br />   
                <label htmlFor="" className='text-lg'>رقم هاتفك</label>
                <br />
                <input type="text"  className='w-full h-8 border-[#CE4642] border-2 text-right' onChange={(e)=>{setPhone(e.target.value)}}/>
                 <br /><br />   
                 <label htmlFor="" className='text-lg' >استفسارك/طلبك</label>
                 <textarea name="" id="" cols="30" rows="10" className='w-full border-[#CE4642] border-2 text-right'  onChange={(e)=>{setDetail(e.target.value)}}></textarea>
                 <br />
                 <button className='bg-[#CE4642] text-white py-2 px-6 text-xl text-center font-semibold rounded-md cursor-pointer' onClick={handleData}>إرســـال</button>
            </form>
        </div>
        <div>
            <img 
                src={callImg}
                width={400}
                height={400}
                className='xs:hidden md:hidden sm:hidden ' alt="" 
                />
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

export default OrderDetails;
