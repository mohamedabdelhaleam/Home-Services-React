import React from 'react'

const Slider = () => {
    const images = [
        "../../assets/images/madin.png",
        "../../assets/images/main.png",
        "../../assets/images/madin.png",
        "../../assets/images/main.png"
    ]
    const imageSlider = ()=>{
        
    }

  return (
    <div className='max-w-[1280px] m-auto h-96'>
        <img src={imageSlider()} alt="" srcset="" className='w-full border-2 border-black h-full'/>
    </div>
  )
}

export default Slider