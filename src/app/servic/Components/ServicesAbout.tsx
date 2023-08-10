import React from 'react'
import Image from 'next/image'
import ButtonD from '@/Components/Shared/ButtonD'
const ServicesAbout = () => {
  return (
    <div className='container py-[202px] flex flex-col items-center justify-center'>
        <div>
            <h4 className='yellow text-center '>What we Grow</h4>
            <h2 className='max-w-[482px] text-center'>Better Agriculture for Better Future</h2>


        </div>

        <div className='flex items-center justify-center  '>
          <div className='flex flex-col text-right gap-[49px] max-w-[396px] '>
          <div>
            <div className='w-[42px] h-[42px] relative'>
                <Image 
                
                src="/assets/images/servic/i1.svg" fill alt="milkbottle"/>


            </div>
            <h6 className='pb-[10px]'>Dairy Products</h6>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>


            </div>
            <div>
            <div className='w-[42px] h-[42px] relative'>
                <Image src="/assets/images/servic/i2.svg" fill alt="milkbottle"/>


            </div>
            <h6 className='pb-[10px]'>Store Services</h6>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>


            </div>

            <div>
            <div className='w-[42px] h-[42px] relative'>
                <Image src="/assets/images/servic/i3.svg" fill alt="milkbottle"/>


            </div>
            <h6 className='pb-[10px]'>Delivery Services</h6>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>


            </div>

          </div>
            
            
            <div className='w-[743px] h-[990px] relative'>
              <Image src="/assets/images/servic/nuts.png" fill alt="nuts"/>

            </div>
            <div className='flex flex-col gap-[49px] max-w-[396px] '>
          <div>
            <div className='w-[42px] h-[42px] relative'>
                <Image 
                
                src="/assets/images/servic/i4.svg" fill alt="milkbottle"/>


            </div>
            <h6 className='pb-[10px]'>Agricultural Services</h6>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>


            </div>
            <div>
            <div className='w-[42px] h-[42px] relative'>
                <Image src="/assets/images/servic/i5.svg" fill alt="milkbottle"/>


            </div>
            <h6 className='pb-[10px]'>Organic Products</h6>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>


            </div>

            <div>
            <div className='w-[42px] h-[42px] relative'>
                <Image src="/assets/images/servic/i6.svg" fill alt="milkbottle"/>


            </div>
            <h6 className='pb-[10px]'>Fresh Vegetables</h6>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>


            </div>

          </div>

        </div>

        <ButtonD title="Explore More"/>

        

      
    </div>
  )
}

export default ServicesAbout