import React from 'react'
import { BlogPostData } from './BlogPostData'

const BlogPost = () => {
  return (
    <div className='container flex items-center justify-center pt-[117px] '>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-[46px]'>
            {
                BlogPostData.map((item,index)=>(
                    
                    <div style={{
                        background:`url(${item?.img}) no-repeat  `,
                        backgroundColor:'#F9F8F8',
                        backgroundPosition: 'center', 
                        backgroundSize: 'cover',
                        borderRadius: '30px', 
                        width:'677px' ,
                        height:'529px',
                    }} 

                     className='sb w-full xl:w-[677px] h-[589px] ' key={index}>
                        <div className='w-[82px] h-[82px] bg-white rounded-full m-[46px] flex flex-col items-center justify-center'>
                            <h6>{item.date}</h6>
                            <h6 className='text-xl '>{item.month}</h6>

                        </div>

                        <div className='mx-[46px] py-[54px] px-[57px] bg-white rounded-[30px]'>
                            </div>

                    </div>


                ))
            }

        </div>

    </div>
  )
}

export default BlogPost