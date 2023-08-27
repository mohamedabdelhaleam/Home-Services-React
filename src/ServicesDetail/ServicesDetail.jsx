
import React, { useEffect, useState } from 'react';
import Questions from '../components/Questions/Questions';
import Rates from '../components/Rates/Rates';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import {baseUrl} from '../api/Api'
import { Helmet } from 'react-helmet';
import OrderDetails from '../components/OrderDetails/OrderDetails';

const ServicesDetails =   () => {
  const {slug} = useParams()
  const [product ,setProduct] =useState({})
  const [productQuestions ,setProductQuestions] =useState([])
  const [productRates ,setProductRates] =useState([])
  
  useEffect(()=>{
    axios.get(`${baseUrl}/service/${slug}`).then(response =>{
        setProduct(response.data.data)
        setProductQuestions(response.data.questions)
        setProductRates(response.data.rates)
    })
  },[slug])
  


  function createMarkup(){
    return {__html:product.description}
  }
  return (


    <div className='py-16 min-h-[calc(100vh-100px)] xs:px-4 sm:px-4 md:px-4 lg:px-4'>
    
      <Helmet>
        <title>
          {product.name}
        </title>
        <meta property='og:title' content={product.name}/>
        <meta name='twitter:title' content={product.name}></meta>
        <meta property='og:description' content={product.short_description}/>
        <meta name='twitter:description' content={product.short_description}></meta>
        <meta property='og:image' content={product.image}/>
        <meta name="twitter:image" content={product.image}></meta>
        "@context": "https://schema.org",
        "@type": "article",
        "name": {product.name},
        "description": {product.short_description},
      </Helmet>
      
      <div className='m-auto max-w-[1280px]'>
        <div className=' flex justify-between items-center gap-8 text-right flex-row-reverse xs:flex-col sm:flex-col md:flex-col'>
          <img src={product.image} alt="" srcset="" className='min-w-[600px] md:min-h-[600px] xs:min-w-[300px] sm:min-w-[360px] md:min-w-[450px]'/>
          <div>
            <div className='text-4xl mb-8 pb-4 border-b-2 border-[#CE4642] text-[#CE4642]'>{product.name}</div>
            <div className='text-lg py-4' dangerouslySetInnerHTML={createMarkup()}/>
            <div><Link to='/buy-service' className='bg-[#CE4642] text-white py-2 px-6 text-xl font-semibold rounded-md'>اطلب الخدمة</Link></div>
          </div>
        </div>
  
          <div className='text-center text-4xl py-8'>بعض الأسئلة الشائعة عن الخدمة</div>
          <div className= "flex flex-col justify-evenly items-center gap-5">
            {
              productQuestions.map((ques)=>(

                <Questions ans={ques.answer} question = {ques.question}/>
              ))
            }
          </div>
          <div className='text-center text-4xl py-8'>تقيمات الخدمة</div>
          <div className= "grid grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 md:grid-cols-2 gap-5 mb-12">
            {
              productRates.map((rate)=>(
                <Rates name = {rate.name} rate = {rate.rate} title = {rate.title} cont = {rate.content}/>
              ))
            }
          </div>
      </div>
            
          <OrderDetails id ={product.id}/>
    </div>
  );
}

export default ServicesDetails;