import React from 'react'
import Image from 'next/image'
const ServicesAbout = () => {
  return (
    <div className='container py-[202px] flex flex-col items-center justify-center'>
        <div>
            <h4 className='yellow'>What we Grow</h4>
            <h2 className='max-w-[482px]'>Better Agriculture for Better Future</h2>


        </div>

        <div className='flex '>
            <div>
            <div className='w-[42px] h-[42px] relative'>
                <Image src="/assets/images/servic/i1.svg" fill alt="milkbottle"/>


            </div>
            <h6></h6>


            </div>
            
            <div>

            </div>
            <div>

            </div>

        </div>

    </div>
  )
}

export default ServicesAbout