import React from 'react'
import { BlogPostData } from './BlogPostData'
import Image from 'next/image'
import {BsArrowRightShort} from 'react-icons/bs'
import Link from 'next/link'

const BlogPost = () => {
  return (
    <div className='container flex items-center justify-center pt-[117px] '>
        <div className=' grid grid-cols-1 lg:grid-cols-2 gap-[46px]'>
            {
                BlogPostData.map((item,index)=>(
                    <Link href={`/blog/${item.id}`} key={index}>
                    <div className='w-full xl:w-[677px] h-[589px]'   >
                    <div style={{
                        background:`url(${item?.img}) no-repeat  `,
                        backgroundColor:'#F9F8F8',
                        backgroundPosition: 'center', 
                        backgroundSize: 'cover',
                        borderRadius: '30px', 
                        width:'677px' ,
                        height:'529px',
                    }} 

                     className='p-[46px] w-full xl:w-[677px] h-[524px] '>
                        <div className='w-[82px] h-[82px] bg-white rounded-full  flex flex-col items-center justify-center'>
                            <h6>{item.date}</h6>
                            <h6 className='text-xl '>{item.month}</h6>

                        </div>

                        <div className='mt-[165px] py-[54px] px-[57px] bg-white rounded-[30px] ' style={{ boxShadow: '0px 0px 10px rgba(167, 167, 167, 0.25)' }}>
                            <div className='flex flex-row gap-2'>
                                <div className='w-[18px] h-[20px] relative'>
                                    <Image src={item.icon} fill alt="icon"/>

                                </div>
                                <h6 className='font-roboto text-lg font-normal'>By {item.author}</h6>
                            </div>
                            <h6 className='pt-[19px] leading-normal'>{item.title}</h6>
                            <p>{item.subTitle}</p>
                           <div className='pt-[19px] flex items-center gap-[9px]'>
                           <h6 className='font-roboto text-[20px] font-bold leading-normal text-sea_green'>Read More</h6>
                            <BsArrowRightShort className=' m-[2px] border rounded-full border-[#335B6B] bg-[#335B6B] text-white'/>
                            </div>
                        </div>

                    </div>
                    </div>
                    </Link>


                ))
            }

        </div>

    </div>
  )
}

export default BlogPost