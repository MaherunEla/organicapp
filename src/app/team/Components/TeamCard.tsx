import React from 'react'
import { TeamCardData } from './TeamCardData'
import Image from 'next/image'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BiLogoFacebookCircle} from 'react-icons/bi'
import {BiLogoTwitter} from 'react-icons/bi'

const TeamCard = () => {
  return (
    <div className='container flex flex-col items-center justify-center py-[150px]'>
        <div className='flex flex-col items-center justify-center pb-[41px]'>
            <h4 className='yellow'>Team</h4>
            <h2 className='pb-4'>Our Organic Experts</h2>
            <p className='text-center max-w-[852px]'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>


        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[27px]'>
            {
                TeamCardData.map((item,index)=>(
                    <div className='w-[327px] h-[466px] xl:w-[449px] xl:h-[615px] bg-cream hover:bg-white hover:drop-shadow-[0_29px_44px_rgba(150,150,150,0.25)]  rounded-[12px] xl:rounded-[30px] ' key={index}>
                    <div className='w-[327px] h-[350px] xl:w-[449px] xl:h-[485px] relative'>
                        <Image 
                        className="rounded-t-[12px] xl:rounded-t-[30px]"
                        src={item.img} fill alt="team"/>

                    </div>
                    <div className='flex py-[35px] px-[28px] justify-between'>
                        <div>
                        <h6>{item.title}</h6>
                    <h6 className='yellow text-[22px]'>{item.profession}</h6>

                        </div>
                        <div className='flex gap-[17px] items-end justify-end text-sea_green'>
                            <AiOutlineInstagram/>
                            <BiLogoFacebookCircle/>
                            <BiLogoTwitter/>


                        </div>

                    </div>

                   

                </div>

                ))
            }


        </div>

    </div>
  )
}

export default TeamCard