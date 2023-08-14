import { IBlogPost } from '@/types'
import Image from 'next/image';
import React from 'react'

type Props = {
    Blog : IBlogPost | undefined;

}

const BlogSingleHero = ({Blog}:Props) => {
  const containerStyle = {
    backgroundImage: `url(${Blog?.img})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center 10%',
    
  };
  const divStyle: React.CSSProperties = {
    boxShadow: '0px 14px 36px 0px rgba(204, 204, 204, 0.25)',
    
  };
  return (
   <div className='h-[1120px]'>
    <div style={containerStyle} className=' w-screen h-[898px] relative'>
                      <div style={divStyle} className='container absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 max-w-[1400px] px-[82px] py-[76px] bg-white rounded-[30px] '>
                        <div className='flex gap-[30px] pb-5'>

                        <p><span className='font-semibold'>Posted On:</span> {Blog?.posted}</p>
                        <div className='flex gap-1'>
                          <Image src="/assets/images/Home/vector.svg" width={18} height={20} alt="people"/>
                          <p>By {Blog?.author}</p>
                        </div>
                         
                        </div>
                        <h1>Research More Organic Food</h1>
                        <p className='max-w-[726px]'>Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed </p>
                       

                      </div> 


                     </div>
   </div>
         

                     

   
  )
}

export default BlogSingleHero