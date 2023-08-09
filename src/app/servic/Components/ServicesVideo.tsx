import Image from 'next/image';
import React from 'react'

const ServicesVideo = () => {
    const backgroundimg="/assets/images/servic/serviceVideo.png";
    const containerStyle = {
        backgroundImage: `url(${backgroundimg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        
      };
  return (
    <div style={containerStyle} className='flex justify-center   w-screen h-[1023px] '>
        <div className='pt-[179px] w-[671px] flex flex-col items-center '>
            <h4 className='yellow'>Organic Only</h4>
            <h2 className='pb-6'>Everyday Fresh & Clean</h2>
            <p className='text-center pb-[50px]'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the </p>
            <div className='w-[107px] h-[107px] relative'>
                <Image src="/assets/images/servic/video.png" fill alt="video"/>
            </div>

        </div>

    </div>
  )
}

export default ServicesVideo