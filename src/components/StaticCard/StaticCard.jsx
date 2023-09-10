import React from 'react';

const StaticCard = ({number , name}) => {
  return (
    <div className='py-8 px-12 xs:w-full w-[296px] h-[200px] text-center bg-white text-white rounded-md flex justify-center items-center'>
      <div>
        <div className='text-4xl font-bold text-[#CE4642]'>{number}</div>
        <div className='text-2xl font-semibold text-[#CE4642]'>{name}</div>
      </div>
    </div>
  );
}

export default StaticCard;
