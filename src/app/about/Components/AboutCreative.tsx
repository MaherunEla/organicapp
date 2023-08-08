import React from 'react'
import Image from 'next/image'
const AboutCreative = () => {
  return (
    <div className='pt-[68px]'>
        <div className='flex flex-row items-center justify-center'>
            <div className='w-[1016px] h-[929px] relative'>
                <Image src="/assets/images/about/about.png" fill alt="image"/>

            </div>
            <div className='w-[671px]'>
                <h4 className='yellow'>About Us</h4>
                <h2>We do Creative <br></br>Things for Success</h2>
                <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.<br></br>
                <br></br>

Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>

            </div>

        </div>

    </div>
  )
}

export default AboutCreative