import React, { useEffect } from 'react'
import { useState } from 'react';
function VideoTitle(props) {
    const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
          setIsVisible(false);
        }, 5000); // 5000ms = 5 seconds
    
        return () => clearTimeout(timer); // Cleanup timer on component unmount
      }, []);
  return (
    <div className='w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold mb-4'>{props.title}</h1>
      {isVisible &&<p className='py-6 text-lg w-[30%] -mt-5'>{props.overview}</p>}
      <div className='flex space-x-4'>
        {/* <button>Play</button>
        <button>more info ⓘ</button> */}
        <button class="flex items-center px-4 py-2 bg-white text-black font-semibold rounded-md shadow-md hover:bg-gray-200 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
            </svg>
            Play
        </button>
        <button class="flex items-center px-4 py-2 bg-gray-500/50 text-white font-semibold rounded-md shadow-md hover:bg-gray-600/50 transition">
            ⓘ More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle
