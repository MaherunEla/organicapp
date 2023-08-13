import Image from 'next/image'
import React from 'react'

const ServiceSingleAbout = () => {
  return (
    <div className='container flex flex-col items-center justify-center pt-[186px]'>
        <div className='w-full xl:w-[1400px] h-[742px] relative'>
            <Image src="/assets/images/servic/image1.jpg" fill alt="service"/>

        </div>
        <div className='pt-[78px]'>
            <h2 className='pb-7'>Organic Store Services</h2>
            <p className='max-w-[936px] pb-[65px]'>t is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. <br></br>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years</p>

            <div className='pb-[28px] flex gap-5'>
                <div className='w-[379px] h-[252px]  relative'>
                    <Image 
                    className='rounded-[20px]'
                    src="/assets/images/servic/image2.jpg" fill alt="service"/>

                </div>
                <div className='px-[45px] py-[63px] bg-cream rounded-[20px]'>
                    <h6>Why Organic</h6>
                    <p className='max-w-[447px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptat. page editors now use Lorem Ipsum as their default model text, and auncover.</p>


                </div>


            </div>

            <div className='flex gap-5'>
               
                <div className='px-[45px] py-[63px] bg-cream rounded-[20px]'>
                    <h6>Speciality Produce</h6>
                    <p className='max-w-[447px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptat. page editors now use Lorem Ipsum as their default model text, and auncover.</p>


                </div>
                <div className='w-[379px] h-[252px]  relative'>
                    <Image 
                    className='rounded-[20px]'
                    src="/assets/images/servic/image3.jpg" fill alt="service"/>

                </div>


            </div>
            <h4 className='pt-[75px] pb-[11px]'>We farm your land</h4>
            <p className='w-[936px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            <div className='flex gap-[28px] pt-[59px]'>
           
            <div className='max-w-[419px] py-[15px] pl-[17px] h-[99px] bg-cream rounded-full flex items-center  gap-[25px] '>
                <div className='  w-[69px] h-[69px] flex items-center justify-center rounded-full bg-green '>
                    <h6 className='text-white'>01</h6>
                   
                    </div>
                    <h6 className='pr-[53px]'>Best quality support</h6>

            </div>

           
            
           
            <div className='flex gap-[28px] '>
            <div className='max-w-[419px] py-[15px] pl-[17px] h-[99px] bg-cream rounded-full flex items-center  gap-[25px] '>
                <div className='  w-[69px] h-[69px] flex items-center justify-center rounded-full bg-green '>
                    <h6 className='text-white'>02</h6>
                   
                    </div>
                    <h6 className='pr-[53px]'>Money back guarantee</h6>

            </div>
            </div>
            

           
            </div>



        </div>

    </div>
  )
}

export default ServiceSingleAbout