import React from 'react'
import Image from 'next/image'
import Button from '@/Components/Shared/Button'

const HomeAbout = () => {
  return (
    <div>

 
    <div className='container flex items-center justify-center gap-9 pt-[162px] pb-[190px]'>
        <div className="bg-[url('/assets/images/Home/natural.jpg')] bg-styles w-[682PX] h-[367px] rounded-[30px] ">
            <div className='px-[54px] py-[109px]'>
                <h4 className='yellow text-white'>Natural!!</h4>
                <h3 className='max-w-[277px] text-white'>Get Garden Fresh Fruits</h3>

            </div>



        </div>
        <div className="bg-[url('/assets/images/Home/offer.png')] bg-styles w-[682PX] h-[367px] ">
        <div className='px-[54px] py-[109px]'>
                <h4 className='yellow text-green'>Offer!!</h4>
                <h3 className='max-w-[277px]'>Get 10% off on Vegetables</h3>

            </div>


        </div>

    </div>


    <div className='ml-[148px] bg-cream h-[1067px]'>
        <div className='flex px-10 gap-10'>
            <div className="bg-[url('/assets/images/Home/about.png')] bg-styles w-[911px] h-[867px]">

            </div>
            <div className='flex flex-col  justify-center max-w-[690px]'>
                <h4 className='yellow'>About Us</h4>
                <h2>We Believe in Working Accredited Farmers</h2>
                <p className='pt-[14px]'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                <div className='pt-[46px] flex gap-[19px]'>
                    <div className='w-[101px] h-[101px] flex items-center justify-center bg-white rounded-[20px]'>
                        <div className='w-[46px] h-[46px] relative'>
                            <Image src="/assets/images/Home/about1.png" fill alt="abouticon"/>
                        </div>

                    </div>
                    <div className='max-w-[444px]'>
                        <h6>Organic Foods Only</h6>
                        <p className='pt-[7px] text-dark_gray'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>

                    </div>


                </div>

                <div className='pt-[46px] flex gap-[19px]'>
                    <div className='w-[101px] h-[101px] flex items-center justify-center bg-white rounded-[20px]'>
                        <div className='w-[46px] h-[46px] relative'>
                            <Image src="/assets/images/Home/about2.png" fill alt="abouticon"/>
                        </div>

                    </div>
                    <div className='max-w-[444px]'>
                        <h6>Quality Standards</h6>
                        <p className='pt-[7px] text-dark_gray'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>

                    </div>


                </div>
                <div className='pt-[48px] max-w-[220px]'>
                <Button title="Shop Now"/>

                </div>
               



            </div>

        </div>

    </div>
    </div>
  )
}

export default HomeAbout