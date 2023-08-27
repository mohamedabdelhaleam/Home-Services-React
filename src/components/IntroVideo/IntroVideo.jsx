import React from 'react';
import ReactPlayer from 'react-player';

const IntroVideo = () => {
  return (
    <div className='my-8'>
      <div className='max-w-[1280px] m-auto'>
        <div className='text-center pb-8 text-2xl font-semibold'>ليه مركز دكتور مؤمن ندا للخدمات الطبية المنزلية الأفضل في مصر</div>
        <ReactPlayer url="https://www.youtube.com/watch?v=DEPeYVwv-7U" controls={true} width="100%" height="720px"/>
      </div>
    </div>
  );
}

export default IntroVideo;
